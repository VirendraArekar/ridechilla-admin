import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import Comontab from './Comontab';
import { ColorOption, ColorTab, MaterialTab, MaterialTabWithColor, MaterialTabWithIcon, SimpleTab, TabsWithIcon } from '../../../../Constant';

const TabCard = () => {
    const pare = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
    const icons = {
        homeIcon:<i className="icofont icofont-ui-home"></i>,
        Profile:<i className="icofont icofont-man-in-glasses"></i>,
        contactIcon:<i className="icofont icofont-contacts"></i>
    }
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Tabbed Card' parent="Bonus Ui" title="Tabbed Card" />
            <Container fluid={true}>
                <Row>
                    <Comontab title={SimpleTab} pare={pare} icone={false} navclass={'pull-right nav-pills nav-primary'}/>
                    <Comontab title={TabsWithIcon} pare={pare} icone={icons} navclass={'pull-right nav-pills nav-primary'} />
                    <Comontab title={ColorTab} pare={pare} icone={false} navclass={'pull-right nav-pills nav-secondary'} />
                    <Comontab title={ColorOption} pare={pare} icone={icons} navclass={'pull-right nav-pills nav-primary'} />
                    <Comontab title={MaterialTab} pare={pare} icone={false} navclass={'pull-right nav-tabs border-tab nav-primary'} />
                    <Comontab title={MaterialTabWithIcon} pare={pare} icone={icons} navclass={'pull-right nav-tabs border-tab nav-primary'} />
                    <Comontab title={MaterialTabWithColor} pare={pare} icone={icons} navclass={'pull-right nav-tabs border-tab nav-secondary'} />
                    <Comontab title={MaterialTabWithColor} pare={pare} icone={icons} navclass={'pull-right nav-tabs border-tab nav-success'} />
                </Row>
            </Container>
        </Fragment>
    );
};

export default TabCard;