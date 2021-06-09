import React, { FC } from 'react'
import { HomePageTemplate } from '@components/templates'
import { withHeaderAndFooter } from '@hocs'

const HomePage: FC = () => (
  <>
    <HomePageTemplate />
  </>
)

export default withHeaderAndFooter(HomePage)
