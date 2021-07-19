import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const Text = styled.div`
  color: blue;
`;

export default function Home() {
  const [text, setText] = useState<string>('자바스크립트');

  setTimeout(() => {
    // setText("타입스크립트")
  }, 1000);

  return (
    <div className="container">
      <Text>
        <span>{text} 적용 완료</span>
      </Text>
    </div>
  );
}
