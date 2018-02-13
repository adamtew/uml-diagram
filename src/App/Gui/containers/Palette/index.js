import React from 'react'

import './index.css'

const ClassIcon = (props) => <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>

const GeneralizationIcon = (props) => <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12l-4-4v3H3v2h15v3z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>


const BinaryIcon = (props) => <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 13H5v-2h14v2z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>

const CompositionIcon = (props) => <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/>
</svg>

const AggregationIcon = (props) => <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
        <path d="M0 0h24v24H0V0z" id="a"/>
    </defs>
    <clipPath id="b">
        <use overflow="visible" xlinkHref="#a"/>
    </clipPath>
    <path clipPath="url(#b)" d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"/>
</svg>


export const Palette = (props) => {
  const button = (click, title, icon) => <div>
    <button
      title={title}
      className="button button--flat"
      onClick={click}
    >
      {icon}
    </button>
  </div>
  const buttons = [
    button(props.onCreateClass, 'New Class', <ClassIcon />),
    button(props.onMakeBinary, 'Binary Association', <BinaryIcon />),
    button(props.onMakeAggregation, 'Aggregation', <AggregationIcon />),
    button(props.onMakeComposition, 'Composition', <CompositionIcon />),
    button(props.onMakeGeneralization, 'Generalization', <GeneralizationIcon />),
  ]
  return <div
    className="palette-container"
  >
    {buttons.map((item) => item)}
  </div>
}
