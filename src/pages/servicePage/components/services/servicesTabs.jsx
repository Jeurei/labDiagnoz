import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { randomId } from 'src/components/utils/common';
import { breakpointsMap } from 'src/constants/styles';
import { getLastPath } from 'src/pages/utils/routing';
import Routes from '../../routes';

const ServicesTabs = () => {
  const theme = useTheme();

  const createTab = (rout) => {
    const { url } = useRouteMatch();
    const location = useLocation();

    const Tab = styled.li`
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      align-items: center;
      border-bottom: ${
        getLastPath(location.pathname) === rout.path
          ? `1px solid ${theme.colors.white};`
          : `1px solid rgba(${theme.colors.colorText.rgb}, 0.2);`
      }
      ${
        getLastPath(location.pathname) === rout.path &&
        `background-image: ${theme.colors.linearGradient};`
      }

      &:hover {
        background-image: ${theme.colors.linearGradient};
      }

      &:last-child {
        border-bottom: none;
      }

      ${breakpointsMap.TABLET} {
        flex-grow: 1;
        width: 245px;
        border-bottom: none;

        ${breakpointsMap.DESKTOP}{
          width: 245px;

          &:nth-of-type(2n) {
            border-left: 1px solid rgba(${theme.colors.colorText.rgb}, 0.2);
            border-right: 1px solid rgba(${theme.colors.colorText.rgb}, 0.2);
          }
        }
      }
    `;

    const TabLink = styled(Link)`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 21px;
      padding-bottom: 22px;
      font-size: ${theme.fontSizes.altFs};
      line-height: ${theme.fontSizes.altLh};
      ${getLastPath(location.pathname) === rout.path &&
      `color: ${theme.colors.altColorText};`}

      &:hover {
        color: ${theme.colors.altColorText};
      }
    `;

    return (
      <Tab key={randomId()}>
        <TabLink to={`${url}${rout.path}`}>{rout.name}</TabLink>
      </Tab>
    );
  };

  const TabsContainer = styled.div`
    paddint-top: 30px;
  `;

  const TabList = styled.ul`
    display: flex;
    list-style: none;
    flex-direction: column;
    padding: 0;
    box-shadow: ${theme.colors.boxShadow};

    ${breakpointsMap.TABLET} {
      flex-direction: row;
      flex-wrap: wrap;
    }

    ${breakpointsMap.DESKTOP} {
      flex-wrap: nowrap;
    }
  `;

  return (
    <TabsContainer>
      <TabList>{Routes.map((el) => createTab(el))}</TabList>
    </TabsContainer>
  );
};

export default ServicesTabs;
