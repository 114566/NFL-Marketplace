
import { config } from "@onflow/fcl";

config()
    .put("app.detail.title", process.env.REACT_APP_WALLET_TITLE)
    .put("app.detail.icon", process.env.REACT_APP_WALLET_ICON)
    .put("discovery.wallet", process.env.REACT_APP_WALLET_DISCOVERY)
    .put("accessNode.api", process.env.REACT_APP_WALLET_ACCESS_API_URL)
    .put("discovery.wallet.method", "TAB/RPC");

// config()
//     .put("app.detail.title", "BudLight x NFL")
//     .put("app.detail.icon", "https://thumbs.dreamstime.com/z/sample-stamp-sample-stamp-sign-icon-editable-vector-illustration-isolated-white-background-123950438.jpg")
//     .put("discovery.wallet", "https://staging.accounts.meetdapper.com/fcl/authn-restricted")
//     .put("accessNode.api", "https://rest-testnet.onflow.org")
//     .put("discovery.wallet.method", "POP/RPC")