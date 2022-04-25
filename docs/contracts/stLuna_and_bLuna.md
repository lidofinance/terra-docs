# Tokens: stLuna and bLuna

stLuna and bLuna tokens are assets built for the Terra blockchain, their value backed by underlying Luna delegations. stLuna and bLuna tokens follow full compliance with the Cw20 standard, having the potential to be integrated into a wide variety of decentralized finance applications.

## Base

This handles balances and transfers. Note that all amounts are
handled as `Uint128` (128 bit integers with JSON string representation).
Handling decimals is left to the UI and not interpreted

### Messages

`Transfer{recipient, amount}` - Moves `amount` tokens from the
`env.sender` account to the `recipient` account. This is designed to
send to an address controlled by a private key and *does not* trigger
any actions on the recipient if it is a contract.

`Send{contract, amount, msg}` - Moves `amount` tokens from the
`env.sender` account to the `recipient` account. `contract` must be an
address of a contract that implements the `Receiver` interface. The `msg`
will be passed to the recipient contract, along with the amount.

`Burn{amount}` - Remove `amount` tokens from the balance of `env.sender`
and reduce `total_supply` by the same amount.

### Queries

`Balance{address}` - Returns the balance of the given address.
Returns "0" if the address is unknown to the contract. Return type
is `BalanceResponse{balance}`.

`TokenInfo{}` - Returns the token info of the contract. Return type is
`TokenInfoResponse{name, symbol, decimal, total_supply}`.

### Receiver

The counter-part to `Send` is `Receive`, which must be implemented by
any contract that wishes to manage CW20 tokens. This is generally *not*
implemented by any CW20 contract.

`Receive{sender, amount, msg}` - This is designed to handle `Send`
messages. The address of the contract is stored in `env.sender`
so it cannot be faked. The contract should ensure the sender matches
the token contract it expects to handle, and not allow arbitrary addresses.

The `sender` is the original account requesting to move the tokens
and `msg` is a `Binary` data that can be decoded into a contract-specific
message. This can be empty if we have only one default action,
or it may be a `ReceiveMsg` variant to clarify the intention. For example,
if I send to a uniswap contract, I can specify which token I want to swap
against using this field.

## Allowances

A contract may allow actors to delegate some of their balance to other
accounts. This is not as essential as with ERC20 as we use `Send`/`Receive`
to send tokens to a contract, not `Approve`/`TransferFrom`. But it
is still a nice use-case, and you can see how the Cosmos SDK wants to add
payment allowances to native tokens. This is mainly designed to provide
access to other public-key-based accounts.

In the original ERC20 approval specifications, there was an issue with race conditions.
If an approval of 50 had previously been set and the user now wished to reduce it to 20, 
an approval transaction was required. While the transaction was being processed, 
a malicious actor could immediately submit another transaction to drain the initial approval 
AND the subsequent one for a total of 70.

The solution discussed in the Ethereum community was to use an IncreaseAllowance 
and a DecreaseAllowance operator (instead of Approve). IncreaseAllowance can be used to set the initial allowance. 
DecreaseAllowance is meant to be robust: if the allowance is decreased by more than the current value 
(eg. the user spent some in the meantime), it will just round down to 0 and not make any underflow error.

### Messages

`IncreaseAllowance{spender, amount, expires}` - Set or increase the allowance
such that `spender` may access up to `amount + current_allowance` tokens
from the `env.sender` account. This may optionally come with an `Expiration`
time, which if set limits when the approval can be used (by time or height).

`DecreaseAllowance{spender, amount, expires}` - Decrease or clear the allowance
such that `spender` may access up to `current_allowance - amount` tokens
from the `env.sender` account. This may optionally come with an `Expiration`
time, which if set limits when the approval can be used (by time or height).
If `amount >= current_allowance`, this will clear the allowance (delete it).

`TransferFrom{owner, recipient, amount}` - This makes use of an allowance
and if there was a valid, un-expired pre-approval for the `env.sender`,
then we move `amount` tokens from `owner` to `recipient` and deduct it
from the available allowance.

`SendFrom{owner, contract, amount, msg}` - `SendFrom` is to `Send`, what
`TransferFrom` is to `Transfer`. This allows a pre-approved account to
not just transfer the tokens, but to send them to another contract
to trigger a given action. **Note** `SendFrom` will set the `Receive{sender}`
to be the `env.sender` (the account that triggered the transfer)
rather than the `owner` account (the account the money is coming from).
Whether we should change this is an open question.

`BurnFrom{owner, amount}` - This works like `TransferFrom`, but burns
the tokens instead of transfering them. This will reduce the owner's
balance, `total_supply` and the caller's allowance.

### Queries

`Allowance{owner, spender}` - This returns the available allowance
that `spender` can access from the `owner`'s account, along with the
expiration info. Return type is `AllowanceResponse{balance, expiration}`.

## Mintable

This allows another contract to mint new tokens, possibly with a cap.
There is only one minter specified here, if you want more complex
access management, please use a multisig or other contract as the
minter address and handle updating the ACL there.

### Messages

`Mint{recipient, amount}` - If the `env.sender` is the allowed minter,
this will create `amount` new tokens (updating total supply) and
add them to the balance of `recipient`, as long as it does not exceed the cap.

### Queries

`Minter{}` - Returns who and how much can be minted. Return type is
`MinterResponse {minter, cap}`. Cap may be unset.

If the cap is set, it defines the maximum `total_supply` that may ever exist.
If initial supply is 1000 and cap is `Some(2000)`, you can only mint 1000 more tokens.
However, if someone then burns 500 tokens, the minter can mint those 500 again.
This allows for dynamic token supply within a set of parameters, especially when
the minter is a smart contract.

## Enumerable

This should be enabled with all blockchains that have iterator support.
It allows us to get lists of results with pagination.

## Marketing

This allows us to attach more metadata on the token to help with displaying the token in
wallets. When you see a token's website, then see it in a wallet, you know what it is.
However, if you see it in a wallet or a DEX trading pair, there is no clear way to find out
any more info about it.

This extension allows us to attach more "Marketing" metadata, which has no effect on the
on-chain functionality of the token, but is very useful in providing a better client-side
experience. Note, that we add a new role `marketing`, which can update such info, but not
affect on-chain logic.

### Messages

`UploadLogo{url | embedded}` - If the `env.sender` is the allowed marketing account,
this will either set a new URL reference where the logo is served, or allow them to upload
a small (less than 5KB) SVG or PNG logo onto the blockchain to be served.

`UpdateMarketing{project, description, marketing}` - If the `env.sender` is the allowed marketing
account, this will update some marketing-related metadata on the contract.

### Queries

`MarketingInfo{}` - Returns marketing-related metadata. Return type is
`MarketingInfoResponse {project, description, logo, marketing}`.

`DownloadLogo{}` - If the token's logo was previously uploaded to the blockchain
(see `UploadLogo` message), then it returns the raw data to be displayed in a browser.
Return type is `DownloadLogoResponse{ mime_type, data }`.

### Queries

`AllAllowances{owner, start_after, limit}` - Returns the list of all non-expired allowances
by the given owner. `start_after` and `limit` provide pagination.

`AllAccounts{start_after, limit}` - Returns the list of all accounts that have been created on
the contract (just the addresses). `start_after` and `limit` provide pagination.
