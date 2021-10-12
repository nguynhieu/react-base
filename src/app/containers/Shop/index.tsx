import React, { memo } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Div } from "./styled";

import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { reducer, sliceKey } from "./slice";
import { selectShop } from "./selectors";
import { shopSaga } from "./saga";
import { messages } from "./messages";

interface Props {}

export const Shop = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: shopSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const shop = useSelector(selectShop);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Shop</title>
        <meta name="description" content="Description of Shop" />
      </Helmet>
      <Div>
        {t("")}
        {/*  {t(...messages.someThing)}  */}
      </Div>
    </>
  );
});
