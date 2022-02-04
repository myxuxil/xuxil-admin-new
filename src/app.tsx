import React, { FC } from 'react';
import Card from './components/Card';

import { GlobalStyles } from './theme/globalStyles';
import * as S from './containers/App/styles';

const App: FC = () => {
  return (
    <S.Wrapper>
      <GlobalStyles />
      <S.Description>
        Ready to dev with Typescript, styled-components, eslint, prettier,
        stylelint, and absolute paths :)
        <Card message={'david'} hi={'david2'}/>
      </S.Description>
    </S.Wrapper>
  );
};

export default App;
