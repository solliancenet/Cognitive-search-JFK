import * as React from "react";
import { Route } from "react-router";
import { DetailPageContainer } from "./detail-page.container";

export interface DetailRouteState {
  hocr: string;
  targetWords: string[];
  type: string;
  targetPath: string;
}

export const detailPath = "/detail/:pageIndex";

export const DetailRoute = (
  <Route path={detailPath} component={DetailPageContainer} />
);
