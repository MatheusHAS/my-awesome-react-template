import React from 'react';
import './homepage.scss';
import { Column } from '@components';

const HomePage = () => {
  const exampleBoxClasses = ['u-pd-12', 'u-mt-8', 'u-mb-8', '__u-grid-example'];
  const fontSizeExamples = [32, 24, 20, 18, 16, 12];

  return (
    <>
      <section className="c-homepage-bg">
        <div className="o-container u-z-index-1 u-mt-24">
          <div className="o-row u-flex-column">
            <h1 className="u-fs-32"># my-awesome-react-template</h1>
            <h2 className="u-mt-24 u-fs-24">Grid system</h2>
          </div>
          <div className="o-row">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((colNumber) => (
              <Column sizes={{ xs: 1, sm: 1, md: 1 }} key={colNumber} classList={exampleBoxClasses}>
                {colNumber}
              </Column>
            ))}
          </div>

          <div className="o-row">
            <Column sizes={{ xs: 3, sm: 3, md: 3 }} classList={exampleBoxClasses}>
              o-column-3
            </Column>
            <Column sizes={{ xs: 3, sm: 3, md: 3 }} classList={exampleBoxClasses}>
              o-column-3
            </Column>
            <Column sizes={{ xs: 3, sm: 3, md: 3 }} classList={exampleBoxClasses}>
              o-column-3
            </Column>
            <Column sizes={{ xs: 3, sm: 3, md: 3 }} classList={exampleBoxClasses}>
              o-column-3
            </Column>
          </div>
          <div className="o-row">
            <Column sizes={{ xs: 12, sm: 4, md: 4 }} classList={exampleBoxClasses}>
              <span className="u-dn@sm">o-column-12</span>
              <span className="u-dn u-db@sm">o-column-4</span>
            </Column>
            <Column sizes={{ xs: 12, sm: 4, md: 4 }} classList={exampleBoxClasses}>
              <span className="u-dn@sm">o-column-12</span>
              <span className="u-dn u-db@sm">o-column-4</span>
            </Column>
            <Column sizes={{ xs: 12, sm: 4, md: 4 }} classList={exampleBoxClasses}>
              <span className="u-dn@sm">o-column-12</span>
              <span className="u-dn u-db@sm">o-column-4</span>
            </Column>
          </div>
          <div className="o-row">
            <Column sizes={{ xs: 6, sm: 6, md: 6 }} classList={exampleBoxClasses}>
              o-column-6
            </Column>
            <Column sizes={{ xs: 6, sm: 6, md: 6 }} classList={exampleBoxClasses}>
              o-column-6
            </Column>
          </div>
          <div className="o-row">
            <Column sizes={{ xs: 12, sm: 12, md: 12 }} classList={exampleBoxClasses}>
              o-column-12
            </Column>
          </div>

          <div className="o-row u-flex-column">
            <h2 className="u-mt-24 u-fs-24">Font-sizes</h2>
            <Column sizes={{ xs: 12, sm: 12, md: 12 }} classList={['u-flex', 'u-flex-column']}>
              <ul className="o-list">
                {fontSizeExamples.map((size) => (
                  <li key={size} className="u-mt-8">
                    <span className={`u-fs-${size}`}>My awesome react template - u-fs-{size}</span>
                  </li>
                ))}
              </ul>
            </Column>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
