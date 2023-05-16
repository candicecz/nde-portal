'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { Button, Link } from '@candicecz/test-design-system';

export default function Home() {
  return (
    <main>
      <Button variant='solid' colorScheme='secondary'>
        hello
      </Button>
      <Link isExternal>This is a link</Link>
    </main>
  );
}
