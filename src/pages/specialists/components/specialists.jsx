import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainContainer from '../../../containers/main-container';
import SectionInner from '../../../containers/section-inner';
// eslint-disable-next-line import/no-cycle
import BreadCrumbs from '../../../components/common/breadCrumbs';
import Filter from './filter';
import SpecialistsCatalog from './specialists-catalog';
import Discounts from '../../../components/common/discounts';
import mapStateToPropsGenerator from '../../../store/mapStateToProps';
import Components from '../../../constants/components';
import { getFlatArr } from '../../utils/filter';

const filterArrayByCategory = (arr, category) => {
  return arr.filter((el) => el.job.includes(category));
};

const filterArrayByName = (arr, name) => {
  return arr.filter((el) => el.name === name);
};

const filterArrayByCity = (arr, city) => {
  return arr.filter((el) => {
    for (let i = 0; i < el.adresses.length; i + 1) {
      if (el.adresses.city === city) return true;
    }
    return false;
  });
};

const filterArrayByAges = (arr, ages) => {
  return arr.filter((el) => el.ages === ages || el.ages === 2);
};

const Specialists = ({ specialists }) => {
  const [specialistsArr, setSpecialistsArr] = useState([...specialists]);
  const [currentFilter, setCurrentFilter] = useState({
    category: '',
    name: '',
    city: '',
    adress: '',
    ages: '',
  });

  const filter = {
    specialistsCategrories: [
      ...new Set(getFlatArr(specialistsArr.map((el) => el.job))),
    ],
    centers: getFlatArr(specialists.map((el) => getFlatArr(el.adresses))),
  };

  return (
    <MainContainer>
      <section className="main__specialists main__section--specialists section specialists">
        <SectionInner>
          <BreadCrumbs className="specialists" />
          <h1 className="main__title">Специалисты</h1>
          <Filter filter={filter} />
          <SpecialistsCatalog specialists={specialistsArr} />
        </SectionInner>
      </section>
      <Discounts />
    </MainContainer>
  );
};

Specialists.propTypes = {
  specialists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      job: PropTypes.arrayOf(PropTypes.string),
      ages: PropTypes.number,
      price: PropTypes.number,
      adresses: PropTypes.arrayOf(
        PropTypes.arrayOf(
          PropTypes.shape({
            city: PropTypes.string,
            center: PropTypes.arrayOf(
              PropTypes.objectOf(
                PropTypes.shape({
                  name: PropTypes.string,
                  adress: PropTypes.string,
                }),
              ),
            ),
          }),
        ),
      ),
    }),
  ).isRequired,
};

export default connect(
  mapStateToPropsGenerator(Components.SPECIALISTS),
  null,
)(Specialists);
