import React from 'react';
import { Figure } from 'react-bootstrap';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { BlockQuotes, Footer, H3, P } from '../../../../AbstractElements';
import { Adda, AlignmentCenter, BlockcardText, BlockcardText1, BlockcardText2, Blockquotes, cite, Namingasource, Someonefamousin, SourceTitle } from '../../../../Constant';

const BlockQuoteCard = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader className='pb-0'>
          <H3>{Blockquotes}</H3>
          <span>{Adda} <code>&lt;{BlockcardText}&gt;</code> {BlockcardText1} <code>&lt;{cite}&gt;</code>.</span>
        </CardHeader>
        <CardBody>
          <P attrPara={{ className: 'sub-title' }}>{Namingasource}</P>
          <Figure className='d-block'>
            <BlockQuotes attrBlockQuote={{ className: 'blockquote' }}>
              <P attrPara={{ className: 'mb-0' }}>{BlockcardText2}</P>
            </BlockQuotes>
            <Footer attrFooter={{ className: 'blockquote-footer' }}>{Someonefamousin}
              <cite title="Source Title">{SourceTitle}</cite>
            </Footer>
          </Figure>
          <P attrPara={{ className: 'sub-title' }} >{AlignmentCenter}</P>
          <Figure className='text-center d-block'>
            <BlockQuotes attrBlockQuote={{ className: 'blockquote' }} >
              <P attrPara={{ className: 'mb-0' }} >{BlockcardText2}</P>
            </BlockQuotes>
            <Footer attrFooter={{ className: 'blockquote-footer' }}>{Someonefamousin}
              <cite title="Source Title">{SourceTitle}</cite>
            </Footer>
          </Figure>
          <P attrPara={{ className: 'sub-title' }}>{'Alignment Right'}</P>
          <Figure className='d-block text-end'>
            <BlockQuotes attrBlockQuote={{ className: 'blockquote' }} >
              <P attrPara={{ className: 'mb-0' }}>{BlockcardText2}</P>
            </BlockQuotes>
            <Footer attrFooter={{ className: 'blockquote-footer' }}>{Someonefamousin}
              <cite title="Source Title">{SourceTitle}</cite>
            </Footer>
          </Figure>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BlockQuoteCard;