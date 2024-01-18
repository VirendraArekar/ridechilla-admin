import React from 'react';
import { Card, CardBody, Col, Table } from 'reactstrap';
import { P } from '../../../../AbstractElements';
import { Classprefix, ColumnOrdering, em, ExtraLarge, ExtraSmall, FontSize, GridBehavior, GridOptions, GridOptionstext, GridPara, GridPara2, GridPara3, GutterWidth, GutterWidthtext, HorizontalPara, Horizontaltimes, Large, Maxcontainerwidth, Medium, Nestable, Noneauto, Offsets, or, px, rem, Small, XXLarge, Yes } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const GridOptionsCard = () => {
  return (
    <Col sm="12">
      <Card>
        <HeaderCard title={GridOptions} span1={GridOptionstext} />
        <CardBody className="card-body">
          <P>{GridPara} <code>{em} </code>{or} <code>{rem} </code>{GridPara2}, <code>{px}</code> {GridPara3} <a href="#javascript">{FontSize}</a>.</P>
          <div className="table-responsive">
            <Table bordered striped>
              <thead>
                <tr>
                  <th></th>
                  <th className="text-center">{ExtraSmall}<br /><small className="digits">&lt;{'576px'}</small></th>
                  <th className="text-center">{Small}<br /><small className="digits">{'≥576px'}</small></th>
                  <th className="text-center">{Medium}<br /><small className="digits">{'≥768px'}</small></th>
                  <th className="text-center">{Large}<br /><small className="digits">{'≥992px'}</small></th>
                  <th className="text-center">{ExtraLarge}<br /><small className="digits">{'≥1200px'}</small></th>
                  <th className="text-center">{XXLarge}<br /><small className="digits">{'≥1400px'}</small></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="text-nowrap" scope="row">{GridBehavior}</th>
                  <td>{Horizontaltimes}</td>
                  <td colSpan={5}>{HorizontalPara}</td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">{Maxcontainerwidth}</th>
                  <td>{Noneauto}</td>
                  <td className="digits">{'540px'}</td>
                  <td className="digits">{'720px'}</td>
                  <td className="digits">{'960px'}</td>
                  <td className="digits">{'1140px'}</td>
                  <td className="digits">{'1320px'}</td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">{Classprefix}</th>
                  <td><code>{'.col-'}</code></td>
                  <td><code>{'.col-sm-'}</code></td>
                  <td><code>{'.col-md-'}</code></td>
                  <td><code>{'.col-lg-'}</code></td>
                  <td><code>{'.col-xl-'}</code></td>
                  <td><code>{'.col-xxl-'}</code></td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">{'# of columns'}</th>
                  <td colSpan={6}>{'12'}</td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">{GutterWidth}</th>
                  <td colSpan={6}>{GutterWidthtext}</td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">{Nestable}</th>
                  <td colSpan={6}>{Yes}</td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">{Offsets}</th>
                  <td colSpan={6}>{Yes}</td>
                </tr>
                <tr>
                  <th className="text-nowrap" scope="row">{ColumnOrdering}</th>
                  <td colSpan={6}>{Yes}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridOptionsCard;