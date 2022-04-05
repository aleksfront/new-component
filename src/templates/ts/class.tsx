/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import "./styles.module.css";

import React from "react";
import { observer } from "mobx-react";
import { makeObservable } from "mobx";

interface Props {

}

@observer
export class COMPONENT_NAME extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    makeObservable(this);
  }

  render() {
    return (
      <div></div>
    );
  }
}