import React from 'react';

import Layout from 'layout/Layout';

import { COMMON_PAGE_PROPS } from 'variables';

import ModuleDetailView from 'components/api/ModuleDetailView';

function UtilityModulePage(props) {
  const { data, ...rest } = props;

  return (
    <Layout title="Util" {...rest}>
      <main>
        <ModuleDetailView />
      </main>
    </Layout>
  );
}

UtilityModulePage.propTypes = COMMON_PAGE_PROPS;

export default UtilityModulePage;
