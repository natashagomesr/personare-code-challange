import * as React from 'react';

import style from './loader.module.css';

function Loader(){
  return (
    <div className={style.container}>
      <div className={style.loaderSpinner} />
    </div>
  );
}

export default Loader;
