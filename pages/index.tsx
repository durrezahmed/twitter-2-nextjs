import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import { Tweet } from '../typings';
import Widgets from './../components/Widgets';
import { fetchTweets } from './../utils/fetchTweets';

interface Props {
  tweets: Tweet[];
}

const Home = ({ tweets }: Props) => {
  return (
    <div className='mx-auto max-h-screen overflow-hidden lg:max-w-6xl'>
      <Head>
        <title>Twitter 2.0 | Durrez Ahmed</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Toaster />

      <main className='grid grid-cols-9 scrollbar-hide'>
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed tweets={tweets} />

        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();

  return {
    props: {
      tweets,
    },
  };
};
