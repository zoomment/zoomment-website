import { Metadata } from 'next';
import { DonationCard } from '@/components/DonationCard';
import styles from './donate.module.css';

export const metadata: Metadata = {
  title: 'Support Zoomment: Donate to Drive Engagement & Innovation',
  description:
    'Join us in shaping the future of web interaction by supporting Zoomment. Your donations directly fund our development and ensure ongoing innovation. Every bit of support counts. Thank you for believing in our mission!',
};

const Donate = () => {
  return (
    <div className="container page">
      <header className="page-head">
        <h1 className="display display--xl">
          Donate <mark>today</mark>
        </h1>
        <p>
          Every contribution fuels our platform&apos;s evolution and upkeep.
          Consistent support enables us to strategize for the future.
        </p>
      </header>

      <div className={styles.grid}>
        <DonationCard
          name="GitHub"
          logo="/github-mark.svg"
          url="https://github.com/sponsors/zoomment"
          tint="panel--yellow"
        >
          Become a Sponsor on GitHub! Your sponsorship directly contributes to
          the development and improvement of Zoomment. Help us continue
          building this open-source platform for vibrant web interactions.
        </DonationCard>
        <DonationCard
          name="Open Collective"
          logo="/opencollective-icon.svg"
          url="https://opencollective.com/zoomment"
          tint="panel--cyan"
        >
          Your contributions on Open Collective directly fuel Zoomment&apos;s
          development, helping us enhance features, bolster security, and
          support our open-source community. Every donation, big or small,
          empowers us to keep Zoomment free, innovative, and user-centric.
        </DonationCard>
      </div>
    </div>
  );
};

export default Donate;
