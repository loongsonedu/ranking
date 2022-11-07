import React from 'react'
import { useRouter } from 'next/router'
import Layout from '@os2edu/layout'
import Nav from './nav'

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '24px 50px',
  color: 'rgba(0,0,0,.85)',
  fontSize: 14,
  backgroundColor: 'white',
}
export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout
      headerProps={{
        title: "龙芯开源技术开发者社区",
        logo: "https://ssl.cdn.maodouketang.com/FsELfTn2KhwjVxKpABQGhyoR-IbH",
        extra: {
          customRender: <Nav />
        }
      }}
      style={{
        height: '100vh'
      }}
    >
      {children}
      <footer style={footerStyle}>
        Rustlings Ranking ©2022 Created by <a href="https://github.com/yfblock">yfblock</a>
      </footer>
    </Layout>
  )
}
