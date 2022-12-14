import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Blog from '../src/components/Blog.tsx';
import About from '../src/components/About.tsx';
import Image from 'next/image'
import {
  Flex
} from '@chakra-ui/react';

export default function Home({ }) {
  return (
    <div 
      >
    {/* <About /> */}
      <Blog />

      </ div>
  )
}
