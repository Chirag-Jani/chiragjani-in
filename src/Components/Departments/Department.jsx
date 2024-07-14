import styles from './Department.module.scss'

const data = [
  "Blockchain Oracles",
  "Decentralized Storage Solutions",
  "Blockchain in Supply Chain",
  "Governance Token Development",
  "Blockchain Development",
  "Layer 2 Scaling Solutions",
  "Crypto Wallets Development",
  "Smart Contract MLM Development",
  "Decentralized Identity (DID)",
  "Blockchain Analytics and Data Services",
  "Token Development",
  "Metaverse Development",
  "Cross-chain Interoperability",
  "Blockchain Gaming",
  "DeFi Development",
  "Decentralized Autonomous Organizations (DAOs)",
  "Zero-Knowledge Proofs Implementation",
  "STO | ICO | IDO Development",
  "Blockchain Solutions for industries",
  "Binance Smart Chain Development",
  "NFT Development",
  "Tokenization of Assets",
  "DAPP Development",
  "Cryptocurrency Development",
  "Blockchain Security Auditing"
]

const Department = () => {
  return (
    <div className={styles.department_container}>
      <div className={styles.heading}>
        We Provide <span> Tailored Solution</span> for.....
      </div>
      <div className={styles.data}>
        <div className={styles.left}>
          <ul>
            {
              data.map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <li key={index}>{item}</li>
                  )
                }
              })
            }
          </ul>
        </div>
        <div className={styles.right}>
          <ul>
            {
              data.map((item, index) => {
                if (index % 2 === 1) {
                  return (
                    <li key={index}>{item}</li>
                  )
                }
              })
            }
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Department