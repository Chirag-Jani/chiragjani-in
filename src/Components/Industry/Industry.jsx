import styles from './Industry.module.scss';
import { FooterDown } from '../../assets/Vectors/global';


const Industry = () => {
  const industries = [
    {
      title: "Finance",
      subtitle: "Decentralized finance (DeFi), cryptocurrencies, and smart contracts",
      description: "We develop blockchain solutions for secure transactions, decentralized exchanges, and automated financial services, revolutionizing traditional banking and investment."
    },
    {
      title: "Supply Chain",
      subtitle: "Transparent and immutable tracking systems",
      description: "Our blockchain implementations provide end-to-end visibility in supply chains, ensuring authenticity, reducing fraud, and optimizing logistics across industries."
    },
    {
      title: "Healthcare",
      subtitle: "Secure medical records and drug traceability",
      description: "We create blockchain-based systems for maintaining tamper-proof patient records, streamlining data sharing between providers, and ensuring pharmaceutical supply chain integrity."
    },
    {
      title: "Real Estate",
      subtitle: "Tokenization of assets and smart property contracts",
      description: "Our blockchain solutions facilitate fractional ownership, automate property transactions, and provide transparent, immutable records of land titles and ownership."
    },
    {
      title: "Voting Systems",
      subtitle: "Secure and transparent electronic voting",
      description: "We develop blockchain-based voting systems that ensure vote integrity, increase accessibility, and provide real-time, auditable results for elections and corporate governance."
    },
    {
      title: "Energy",
      subtitle: "Peer-to-peer energy trading and green energy certification",
      description: "Our blockchain platforms enable decentralized energy markets, facilitate carbon credit trading, and provide transparent tracking of renewable energy sources."
    },
    {
      title: "Identity Management",
      subtitle: "Self-sovereign identity and access control",
      description: "We create blockchain-based identity solutions that give individuals control over their personal data, simplify KYC processes, and enhance privacy across digital services."
    },
    {
      title: "Intellectual Property",
      subtitle: "Copyright protection and royalty distribution",
      description: "Our blockchain systems provide immutable proof of creation, automate royalty payments, and simplify licensing for various forms of intellectual property."
    },
    {
      title: "Gaming & Entertainment",
      subtitle: "NFTs, virtual assets, and decentralized gaming platforms",
      description: "We develop blockchain solutions for creating, trading, and verifying ownership of digital assets in games and entertainment, enabling new revenue models and player-owned economies."
    },
    {
      title: "Education",
      subtitle: "Verifiable credentials and decentralized learning platforms",
      description: "Our blockchain-based education systems securely store academic credentials, facilitate peer-to-peer learning, and enable micro-credentialing for lifelong learning."
    },
    {
      title: "Government & Public Services",
      subtitle: "Transparent governance and efficient public service delivery",
      description: "We implement blockchain solutions for secure record-keeping, streamlined bureaucratic processes, and transparent public fund management, enhancing trust in government operations."
    }
  ];

  return (
    <section className={styles.industrySection}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.industryItems}>
            <div className={styles.industryCard}>

              <div className={styles.industryImg}>
                <FooterDown />
              </div>

              <div className={styles.industryContent}>
                <h1 className={styles.main_heading}>Innovating</h1>
                <h1 className={styles.main_heading}>Beyond</h1>
                <h1 className={styles.main_heading}>Boundaries.</h1>
              </div>

            </div>
            {industries.map((industry, index) => (
              <div key={index} className={styles.industryCard}>
                <div className={styles.industryImg}>
                  <svg width="433" height="435" viewBox="0 0 433 435" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M433 217.1C364.8 194.8 311.4 109.3 297.5 0C287.6 77.9 257.6 143.7 216.5 183.2C175.4 143.7 145.4 78 135.5 0C121.6 109.3 68.2 194.8 0 217.1C68.2 239.4 121.6 324.9 135.5 434.2C145.4 356.3 175.4 290.5 216.5 251C257.6 290.5 287.6 356.2 297.5 434.2C311.4 324.9 364.8 239.4 433 217.1Z" fill="#6464FF" />
                  </svg>

                </div>
                <div className={styles.industryContent}>
                  <h1>{industry.title}</h1>
                  {industry.subtitle && <h4>{industry.subtitle}</h4>}
                  <p className={industry.title === "Media" ? styles.media : ''}>{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;