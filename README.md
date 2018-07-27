# GIVE Token-Curated Registry


## Initialize
The only environmental dependency you need is Node.
```
npm install
npm run compile
```
## Configuration 

Edit `conf/config.json` 

Defaults Parameters:

<table>
  <tr>
    <td><b>Parameter</td>
    <td><b>Description</td>
  </tr>
  <tr>
    <td>minDeposit</td>
    <td>The number of tokens a candidate must lock as a deposit for their application, and for the duration of their listing thereafter.</td>
  </tr>
  <tr>
    <td>applyStageLen</td>
    <td>The duration, in blocks or epoch time, during which an application can be challenged. If this period passes with no challenge being issued, the candidate becomes a listee.</td>
  </tr>
  <tr>
    <td>commitStageLen</td>
    <td>The duration, in blocks or epoch time, during which token holders can commit votes for a particular challenge.</td>
  </tr>
  <tr>
    <td>revealStageLen</td>
    <td>The duration, in blocks or epoch time, during which token holders can reveal committed votes for a particular challenge.</td>
  </tr>
  <tr>
    <td>dispensationPct</td>
    <td>The percentage of the forfeited deposit in a challenge which is awarded to the winning party as a special dispensation compensating for their capital risk.</td>
  </tr>
  <tr>
    <td>voteQuorum [1]</td>
    <td>The percentage of tokens out of the total tokens revealed in favor of admitting/keeping a challenged candidate necessary for that candidate to get/keep listee status. The VOTE_QUORUM does not count non-voting tokens, and unrevealed tokens are considered non-voting. By way of example, a VOTE_QUORUM of 50 means all challenges are simple majority votes.</td>
  </tr>
</table>

Token Parameters:

<table>
  <tr>
    <td><b>Parameter</td>
    <td><b>Description</td>
  </tr>
  <tr>
    <td>address</td>
    <td>Address of deployed contract (only used if deployToken=false).</td>
  </tr>
  <tr>
    <td>deployToken</td>
    <td>If true will deploy token contract, if false will use contract address from previous parameter</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Token Name</td>
  </tr>
  <tr>
    <td>symbol</td>
    <td>Token Symbol (GIV)</td>
  </tr>
  <tr>
    <td>supply</td>
    <td>Tokens emission (how many tokens are available). (18 decimals)</td>
  </tr>
  <tr>
    <td>tokenHolders</td>
    <td>Array of token holders in the form : {address,amount} , Example : <pre> [{ "address": "0x627306090abaB3A6e1400e9345bC60c78a8BEf57", "amount": "250000000000000000000000000" }, { "address": "0xf17f52151EbEF6C7334FAD080c5704D77216b732", "amount": "250000000000000000000000000" }]`</pre></td>
  </tr>
</table>

## Tests

You can run it with `npm run test`. 
To run the tests with the RPC logs, use `npm run test gas`.

## Composition of the repo
The repo is composed as a Truffle project, and is largely idiomatic to Truffle's conventions. The tests are in the `test` directory, the contracts are in the `contracts` directory and the migrations (deployment scripts) are in the `migrations` directory. Furthermore there is a `conf` directory containing json files where deployments can be parameterized.

## Deploying 
In the `token` object, set `deployToken` to `true` if you want to deploy token as part of the TCR deployment. You can specifiy initial recipients of the token in the `tokenHolders` array. If you have already deployed a token, set `deployToken` to `false` and provide the token's address in the `address` property.

The `package.json` includes scripts for deploying to rinkeby and mainnet. Modify `truffle.js` and `package.json` if you need other networks. You'll need a `secrets.json` file with a funded mnemonic on the `m/44'/60'/0'/0/0` HD path in the root of the repo to deploy. Your `secrets.json` should look like this:

```json
{
  "mnemonic": "my good mnemonic ..."
}
```

If you prefer to use an environment variable, your `.bashrc` or `.bash_profile` should look something like:

```bash
export MNEMONIC='my good mnemonic ...'
```

You can use [https://iancoleman.io/bip39/](https://iancoleman.io/bip39/) to generate a mnemonic and derive its `m/44'/60'/0'/0/0` address.

*Ref: Forked from* [tcr](https://github.com/skmgoldin/tcr)
