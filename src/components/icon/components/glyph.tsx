import React from 'react';

// library of svgs + their string names.
interface GlyphProps {
  glyph?: string;
  stroke?: string;
  fill?: string;
}

const Glyph: React.FC<GlyphProps> = ({ glyph, stroke, fill }) => {
  console.log('f', fill, stroke);
  switch (glyph) {
    case 'infectiousDisease':
      return (
        <g>
          <g>
            <path
              fill={fill}
              d='M147.4,117.6c-10.5,0-19-8.5-19-19c0-10.5,8.5-19,19-19s19,8.5,19,19C166.5,109,157.9,117.6,147.4,117.6z
				 M147.4,89.5c-5,0-9,4.1-9,9c0,5,4.1,9,9,9s9-4.1,9-9C156.5,93.5,152.4,89.5,147.4,89.5z'
            />
          </g>
          <g>
            <path
              fill={fill}
              d='M110.5,192.9c-23.1,0-41.9-18.8-41.9-41.9V98.7c0-2.8,2.2-5,5-5s5,2.2,5,5V151
				c0,17.6,14.3,31.9,31.9,31.9s31.9-14.3,31.9-31.9v-36.1c0-2.8,2.2-5,5-5s5,2.2,5,5V151C152.4,174.1,133.6,192.9,110.5,192.9z'
            />
          </g>
          <g>
            <path
              fill='#DE1CE8'
              d='M76.1,102H71c-1,0-9.9-3.6-9.9-8v-4.2c0-4.4,4.5-5.3,9.9-5.3h5.2c5.5,0,9.9,0.9,9.9,5.3V94
				C86,98.4,77.2,102,76.1,102z'
            />
            <path
              fill={fill}
              d='M76.1,104H71c-1.5,0-11.9-3.9-11.9-10v-4.2c0-7.3,9-7.3,11.9-7.3h5.2c3,0,11.9,0,11.9,7.3V94
				C88,100.1,77.6,104,76.1,104z M76.1,100L76.1,100C76.1,100,76.1,100,76.1,100z M71.1,100H76c1.7-0.4,8.1-3.5,8.1-6v-4.2
				c0-1.1,0-3.3-7.9-3.3H71c-7.9,0-7.9,2.3-7.9,3.3V94C63,96.5,69.4,99.7,71.1,100z M71,100C71,100,71,100,71,100L71,100
				C71,100,71,100,71,100z'
            />
          </g>
          <g>
            <path
              fill={fill}
              d='M81.5,96.3H62.7c-9.3,0-17.5-6.2-21.5-16.3c-4.4-11.1-17.9-48.7-6.7-65.1C36.9,11.3,41.7,7,50.6,7
				c2.8,0,5,2.2,5,5s-2.2,5-5,5c-4.9,0-6.8,2-7.9,3.5c-6.3,9.2-0.6,34.7,7.8,55.8c2.5,6.2,7,9.9,12.2,9.9h18.8
				c5.2,0,9.8-3.7,12.2-9.9c8.4-21.1,14-46.6,7.8-55.8c-1-1.5-3-3.5-7.9-3.5c-2.8,0-5-2.2-5-5s2.2-5,5-5c8.9,0,13.7,4.3,16.1,7.9
				c11.2,16.5-2.3,54-6.7,65.1C99,90.1,90.8,96.3,81.5,96.3z'
            />
          </g>
          <g>
            <path
              d='M57.5,11.3c-0.4-2.4-2.2-4.1-4-4l0,0c-0.1-0.6-0.7-1-1.2-0.9l-0.9,0.2c-0.6,0.1-1,0.7-0.9,1.2l0.3,1.7
				c-0.4,0.9-0.5,1.9-0.3,3.1c0.2,1.1,0.7,2.1,1.3,2.8l0.2,1.1c0.1,0.6,0.7,1,1.2,0.9l0.9-0.2c0.4-0.1,0.7-0.3,0.8-0.7
				C56.7,16.1,57.9,13.8,57.5,11.3z'
            />
            <path
              fill={fill}
              d='M53,22.3c-1.2,0-2.4-0.4-3.5-1.1c-1.3-0.9-2.2-2.3-2.5-3.9c-0.8-1.2-1.3-2.5-1.5-3.9
				c-0.3-1.4-0.2-2.9,0.1-4.2l-0.1-0.5c-0.6-3.3,1.6-6.5,4.9-7l0.9-0.2c1.8-0.3,3.6,0.2,4.9,1.3c3.1,1.1,5.5,4,6.2,7.7l0,0
				c0.8,4.4-1.1,8.5-4.5,10.2c-0.8,0.7-1.8,1.2-2.9,1.4l-0.9,0.2C53.7,22.3,53.4,22.3,53,22.3z M48.5,8.2
				C48.5,8.2,48.5,8.2,48.5,8.2L48.5,8.2z'
            />
          </g>
          <g>
            <path
              d='M89.6,11.3c0.4-2.4,2.2-4.1,4-4l0,0c0.1-0.6,0.7-1,1.2-0.9l0.9,0.2c0.6,0.1,1,0.7,0.9,1.2l-0.3,1.7
				c0.4,0.9,0.5,1.9,0.3,3.1c-0.2,1.1-0.7,2.1-1.3,2.8l-0.2,1.1c-0.1,0.6-0.7,1-1.2,0.9L93,17.1c-0.4-0.1-0.7-0.3-0.8-0.7
				C90.3,16.1,89.2,13.8,89.6,11.3z'
            />
            <path
              fill={fill}
              d='M94.1,22.3c-0.4,0-0.7,0-1.1-0.1l-0.9-0.2c-1.1-0.2-2.1-0.7-2.9-1.4c-3.3-1.8-5.3-5.9-4.5-10.2l0,0
				c0.7-3.7,3.1-6.6,6.2-7.7c0.1-0.1,0.2-0.2,0.4-0.3c1.3-0.9,2.9-1.3,4.5-1l0.9,0.2c1.6,0.3,3,1.2,3.9,2.5c0.9,1.3,1.3,2.9,1,4.5
				l-0.1,0.5c0.3,1.4,0.3,2.8,0.1,4.2c-0.3,1.4-0.8,2.8-1.5,3.9c-0.3,1.6-1.2,3-2.5,3.9C96.5,21.9,95.3,22.3,94.1,22.3z'
            />
          </g>
        </g>
      );
    case 'infectiousAgent':
      return (
        <g>
          <g>
            <g>
              <path
                fill={fill}
                d='M36.5,89.8l-9.3-3.7c9.2-23,29.2-39.9,53.3-45.2l2.2,9.8C61.8,55.3,44.5,69.9,36.5,89.8z'
              />
            </g>
          </g>
          <g>
            <path
              fill={fill}
              d='M40.7,163.7C28.6,150,21.9,132.3,21.9,114c0-1.3,0-2.6,0.1-4l10,0.5c-0.1,1.1-0.1,2.3-0.1,3.4
				c0,15.9,5.8,31.2,16.3,43L40.7,163.7z'
            />
          </g>
          <g>
            <path
              fill={fill}
              d='M96.8,188.9c-14.1,0-27.8-3.9-39.7-11.4l5.3-8.5c10.3,6.4,22.2,9.8,34.4,9.8c15.3,0,30.2-5.4,41.9-15.3
				l6.5,7.6C131.7,182.6,114.5,188.9,96.8,188.9z'
            />
          </g>
          <g>
            <path
              fill={fill}
              d='M162.7,149.6l-8.8-4.8c3.2-6,5.5-12.4,6.7-19l9.8,1.8C169,135.4,166.4,142.8,162.7,149.6z'
            />
          </g>
          <g>
            <path
              fill={fill}
              d='M160.8,103.5c-1.9-11.8-7.1-22.9-15-32l7.5-6.6c9.1,10.5,15.1,23.3,17.4,37L160.8,103.5z'
            />
          </g>
          <g>
            <path
              fill={fill}
              d='M137.7,63.7c-11.5-9.4-26.1-14.6-41-14.6v-10c17.2,0,34,6,47.3,16.8L137.7,63.7z'
            />
          </g>
          <g>
            <path
              fill='none'
              stroke='#000000'
              strokeMiterlimit='10'
              d='M35.3,84.2'
            />
          </g>
          <g>
            <path
              fill='none'
              stroke='#000000'
              strokeMiterlimit='10'
              d='M35,85.9'
            />
          </g>
          <g>
            <path
              fill={fill}
              d='M99.7,63c-0.8-1.1-1.5-2.3-2.1-3.6c-0.3-0.6-0.6-1.2-0.9-1.9c-0.3-0.6-0.6-1.2-0.9-1.9
				c-0.5-1.3-1.1-2.5-1.6-3.9c-0.5-1.3-0.9-2.7-1.3-4.1c-0.4-1.4-0.6-2.9-0.8-4.3C92,42,92,40.5,92,39c0.1-1.5,0.2-3,0.5-4.5
				c0.3-1.5,0.7-2.9,1.1-4.3c0.9-2.7,1.7-5.1,2.2-7.4c0.2-1.1,0.4-2.2,0.4-3.1c0-0.4,0-1-0.1-1.5c-0.1-0.5-0.1-0.9-0.2-1.4
				c-0.2-0.9-0.6-1.9-1-2.7c-0.4-0.8-1-1.5-1.6-2.2c-1.2-1.3-2.6-2-4.6-2.5l0.3,0.1c-0.8-0.2-1.5-0.3-2-0.3c-0.3,0-1.3,0-1.7,0.1
				c-1.1,0.1-2.3,0.5-3.4,1.1c-1.1,0.6-2,1.3-2.8,2.2c-0.7,0.8-1.4,2-1.8,3.1c-0.4,1.1-0.6,2.4-0.6,3.7c0,0.6,0,1.2,0.2,1.8
				c0.1,0.7,0.3,1.3,0.5,1.9c0.2,0.6,0.4,1.1,0.7,1.5c0.3,0.5,0.8,1.1,1.4,1.7l0.9,1l0.4,0.5l0.2,0.3l0.3,0.4c0.4,0.5,0.8,1,1.1,1.5
				l0.9,1.6l0.1,0.2l0,0.1l0.4,1l0.2,0.5l0.2,0.6c0.2,0.8,0.3,1.5,0.4,2.3c0.2,1.5,0.2,3,0.2,4.4c-0.1,1.4-0.3,2.8-0.5,4.1
				c-0.2,1.4-0.6,2.6-0.9,4c-0.3,1.3-0.7,2.5-1.1,3.8c-0.5,1.3-0.9,2.5-1.5,3.7c-1,2.4-2,4.8-3.6,6.9c0.7-2.5,0.9-5.1,1.2-7.6
				c0.2-1.3,0.3-2.5,0.4-3.8c0.1-1.2,0.2-2.5,0.2-3.8c0-1.2,0.1-2.5,0.1-3.7c0-1.2-0.1-2.4-0.3-3.6c-0.2-1.1-0.4-2.2-0.7-3.2
				c-0.2-0.5-0.4-1-0.5-1.4L77.4,36l-0.2-0.4l-0.4-0.7l0.2,0.3c-0.2-0.2-0.4-0.5-0.6-0.7c-0.2-0.2-0.4-0.4-0.6-0.6l-0.2-0.2
				l-0.3-0.2L74.8,33l-1-0.9c-0.7-0.6-1.5-1.3-2.3-2.3c-0.9-1-1.5-2.1-2-3.2c-0.5-1.1-0.9-2.2-1.2-3.2c-0.3-1.1-0.6-2.3-0.6-3.5
				c-0.2-2.3,0-4.7,0.7-7c0.3-1.1,0.8-2.3,1.4-3.3c0.5-1,1.2-2.1,2-3.1c1.5-1.9,3.4-3.5,5.5-4.7c2.1-1.2,4.4-2,6.9-2.4l0.9-0.1
				l0.8,0l0.4,0l0.5,0c0.4,0,0.7,0,1,0C89-0.7,90.1-0.4,91-0.3l0.2,0l0.1,0c1.6,0.4,3.3,1.1,4.9,2.1c1.6,1,3.1,2.2,4.3,3.6
				c1.2,1.4,2.2,2.9,2.9,4.6c0.7,1.6,1.2,3.3,1.5,5c0.1,0.9,0.2,1.7,0.3,2.6c0,0.9,0,1.7-0.1,2.6c-0.2,1.8-0.6,3.4-1.1,4.8
				c-1,2.9-2.3,5.5-3.4,7.8c-0.6,1.2-1,2.3-1.4,3.4c-0.4,1.1-0.8,2.3-1,3.4c-0.5,2.3-0.7,4.9-0.7,7.4c0,1.3,0.1,2.6,0.3,3.9
				c0.2,1.3,0.4,2.6,0.5,4c0.2,1.3,0.4,2.7,0.6,4c0.1,0.7,0.2,1.4,0.3,2C99.4,61.6,99.6,62.3,99.7,63z'
            />
          </g>
          <g>
            <path
              fill={fill}
              d='M133.2,132.3c0.1,0.3,0.3,0.4,0.5,0.6l0,0c1.1,0.9,2.4,1.7,3.5,2.6l1.8,1.3l0.8,0.6
				c0.3,0.2,0.6,0.4,0.9,0.6c1.2,0.7,2.3,1.6,3.5,2.2c1.1,0.6,2.3,1.1,3,1l-0.4-0.1l0.5,0l-0.4,0c0.4,0,0.7-0.1,1.1-0.2
				c0.4-0.1,1-0.2,1.5-0.3c0.6-0.1,1.2-0.1,1.8-0.1c0.7,0,1.2,0.1,1.8,0.1c1.2,0.2,2.3,0.5,3.4,0.9c1.1,0.4,2.1,0.9,3.1,1.5
				c2,1.2,3.8,2.8,5.2,4.7c1.4,1.9,2.5,4,3.2,6.4c0.7,2.3,0.8,4.8,0.5,7.3c-0.2,1.2-0.4,2.4-0.9,3.6c-0.2,0.6-0.5,1.3-0.7,1.7
				c-0.3,0.6-0.6,1.2-1,1.7c-0.7,1.1-1.5,2.1-2.5,3c-0.9,0.9-2,1.6-3.1,2.3c-2.2,1.3-4.7,2.1-7.3,2.3c-2.5,0.2-5-0.2-7.3-1.1
				c-1.2-0.4-2.2-0.9-3.2-1.5c-1-0.6-2-1.3-2.8-2.1c-0.9-0.8-1.7-1.7-2.4-2.5c-0.7-0.9-1.4-1.9-1.9-2.9c-1.1-2-1.7-4-2.2-5.9
				c-0.5-1.8-0.8-3.5-1.3-4.9c-0.5-1.4-1.3-2.8-2.2-4.2c-0.5-0.7-1-1.4-1.5-2.1c-0.6-0.7-1.1-1.4-1.7-2.2c-1.2-1.4-2.2-2.9-3.5-4.2
				l0,0c-0.2-0.2-0.3-0.4-0.6-0.4c0.2-0.1,0.5,0,0.8,0.1l0,0c1.8,0.7,3.4,1.6,5,2.6c0.8,0.5,1.6,1,2.4,1.5c0.8,0.5,1.6,1.1,2.4,1.7
				c1.6,1.2,3,2.7,4.2,4.5c1.2,1.8,2,3.7,2.7,5.2c0.7,1.6,1.5,2.9,2.3,4c0.4,0.6,0.8,1,1.4,1.5c0.5,0.5,1,0.9,1.6,1.3
				c0.5,0.4,1.1,0.7,1.7,0.9c0.6,0.3,1.2,0.5,1.8,0.7c1.1,0.3,2.4,0.4,3.5,0.2c1.1-0.1,2.1-0.5,3-1.1c0.5-0.3,0.9-0.6,1.3-1
				c0.4-0.4,0.7-0.8,1-1.2c0.1-0.2,0.3-0.4,0.4-0.7c0.2-0.4,0.3-0.5,0.4-0.8c0.2-0.5,0.4-1.1,0.5-1.6c0.2-1.1,0.2-2.3,0-3.5
				c-0.2-1.2-0.7-2.4-1.3-3.5c-0.6-1.1-1.5-2.1-2.5-3c-0.5-0.4-1.1-0.8-1.6-1.2c-0.6-0.3-1.2-0.6-1.8-0.8c-1.1-0.5-2.2-0.5-4.6-0.6
				l-0.4,0l0,0l-0.4-0.1l-0.4-0.1l-0.6-0.2l-0.5-0.2l-0.3-0.2c-0.4-0.2-0.8-0.5-1.2-0.8c-0.7-0.5-1.3-1.1-1.9-1.6
				c-0.6-0.6-1.1-1.1-1.6-1.7c-0.5-0.6-1-1.2-1.4-1.8c-0.2-0.3-0.4-0.6-0.7-0.9c-0.2-0.3-0.5-0.6-0.7-0.9c-0.4-0.6-0.8-1.2-1.2-1.9
				c-0.8-1.3-1.6-2.5-2.2-3.9l0,0C133.3,132.9,133.1,132.6,133.2,132.3z'
            />
          </g>
          <g>
            <path
              fill={fill}
              d='M51,107.6c-0.2-0.2-0.5-0.1-0.8-0.2l0,0c-1.6,0-3.2,0.2-4.8,0.2l-2.4,0.1l-1.1,0.1
				c-0.4,0-0.8,0.1-1.2,0.1c-1.5,0.2-3.1,0.3-4.5,0.6c-0.7,0.1-1.4,0.3-1.9,0.5c-0.3,0.1-0.5,0.2-0.8,0.4l-0.2,0.1c0,0,0,0-0.1,0.1
				l-0.4,0.3l0.4-0.2l-0.4,0.3l0.3-0.3c-0.3,0.3-0.6,0.7-0.8,1.1c-0.3,0.4-0.6,0.9-1,1.3c-0.4,0.5-0.8,0.9-1.3,1.4
				c-0.5,0.5-1,0.9-1.6,1.2c-1.1,0.7-2.2,1.4-3.4,1.8c-1.2,0.5-2.4,0.8-3.7,1.1c-2.5,0.5-5.2,0.4-7.8-0.3c-2.5-0.6-5-1.8-7.1-3.4
				c-2.1-1.6-3.9-3.6-5.2-6c-0.7-1.2-1.2-2.4-1.6-3.7c-0.2-0.6-0.4-1.4-0.5-1.9c-0.1-0.6-0.3-1.3-0.3-2c-0.2-1.4-0.2-2.7-0.1-4
				c0.1-1.3,0.4-2.6,0.8-3.9c0.8-2.6,2-5,3.8-7.1c1.7-2.1,3.9-3.8,6.3-4.9c0.6-0.3,1.2-0.6,1.9-0.8c0.6-0.2,1.2-0.4,1.9-0.6
				c1.3-0.3,2.5-0.5,3.9-0.6c1.3-0.1,2.6,0,3.9,0.2c1.2,0.2,2.5,0.5,3.7,0.9c2.4,0.9,4.4,2.2,6.2,3.5c1.7,1.3,3.2,2.5,4.6,3.4
				c1.4,0.9,3.1,1.6,4.9,2.1c0.9,0.2,1.8,0.4,2.8,0.7c1,0.2,2,0.3,3,0.5l3,0.5c0.5,0.1,1,0.2,1.5,0.2c0.5,0.1,1,0.1,1.5,0.1l0,0
				c0.3,0,0.5,0,0.7-0.2c-0.1,0.3-0.4,0.4-0.6,0.5l0,0c-2,0.7-4.1,1-6.1,1.4c-1,0.2-2.1,0.3-3.1,0.4C42.2,93,41.1,93,40,93.1
				c-2.2,0-4.5-0.3-6.8-1.1c-2.2-0.8-4.2-1.9-5.9-2.7c-1.7-0.8-3.3-1.5-4.8-1.8c-0.7-0.2-1.4-0.2-2.3-0.2c-0.7,0-1.5,0-2.2,0.2
				c-0.7,0.1-1.4,0.3-2.1,0.6c-0.3,0.1-0.7,0.3-1,0.4c-0.3,0.1-0.6,0.3-0.9,0.5c-1.2,0.7-2.3,1.7-3.1,2.7c-0.8,1.1-1.4,2.3-1.8,3.7
				c-0.2,0.7-0.3,1.4-0.4,2.1c-0.1,0.7-0.1,1.4,0,2c0.3,2.8,1.6,5.4,3.7,7.3c2.1,1.9,5,3,8,2.9c0.7,0,1.5-0.1,2.2-0.3
				c0.8-0.2,1.5-0.4,2.1-0.7c0.3-0.2,0.7-0.3,0.9-0.5c0.3-0.2,0.6-0.4,0.9-0.7c0.3-0.3,0.7-0.5,1.1-0.9c0.4-0.4,0.8-0.7,1.3-1.1
				l0.3-0.3l0.4-0.3l0.4-0.2l0.6-0.3l0.5-0.2l0.4-0.1c0.5-0.1,1-0.2,1.5-0.3c1-0.1,1.9-0.1,2.8-0.1c1.8,0.1,3.3,0.4,5,0.7
				c0.4,0.1,0.8,0.2,1.2,0.2c0.4,0.1,0.9,0.2,1.2,0.3c0.8,0.2,1.5,0.4,2.3,0.6c1.5,0.5,3.1,0.9,4.6,1.6l0,0
				C50.5,107.3,50.9,107.4,51,107.6z'
            />
          </g>
          <g>
            <path
              fill={fill}
              d='M142.3,82.1c0.3-2.9,0.4-5.8,1.1-8.8c0.2-0.8,0.4-1.5,0.8-2.3c0.3-0.7,0.8-1.5,1.2-2.2
				c0.8-1.3,1.7-2.5,2.5-3.7c3.3-4.8,6.6-9.6,10-14.2c1.7-2.3,3.3-4.7,5-7c1.6-2.4,3.3-4.7,4.4-6.7c0.3-0.5,0.4-0.9,0.6-1.3
				c0.1-0.4,0.2-0.8,0.3-1.2c0.1-0.8,0-1.6-0.2-2.3c-0.1-0.4-0.2-0.7-0.4-1c-0.2-0.3-0.4-0.6-0.6-0.9c-0.5-0.6-1.2-1.2-1.9-1.6
				c-1.4-0.8-3.3-1.1-5-0.8c-1.6,0.3-3.3,1.3-4.3,2.6c-0.5,0.6-1,1.4-1.2,2.3c-0.1,0.2-0.1,0.4-0.2,0.6l-0.1,0.3l0,0.2c0,0,0,0,0,0
				c0,0,0,0.5,0,1.1c0.1,0.6,0.2,1.2,0.4,2.1c0.1,0.4,0.1,0.9,0.2,1.3l0,0.4l0,0.5c0,0.3,0,0.6,0,0.9c0,0.6-0.1,1.2-0.2,1.7
				c-0.1,0.4-0.2,1-0.4,1.4c-0.3,0.9-0.6,1.7-0.9,2.5c-0.7,1.5-1.5,2.9-2.3,4.2c-0.8,1.3-1.7,2.6-2.5,3.8l-1.3,1.8
				c-0.4,0.6-0.9,1.2-1.4,1.8c-0.9,1.2-1.9,2.3-2.8,3.4c-1.9,2.3-3.9,4.4-6.1,6.5l-1.6,1.6c-0.7,0.6-1.4,1-2.1,1.2
				c-1.4,0.5-2.8,0.9-4.1,1.6c1-1.1,2.3-1.9,3.4-2.8c0.5-0.4,1.1-0.9,1.3-1.3l1-1.9l2.1-3.8l2.1-3.8l2-3.8l0.9-1.9l0.9-1.9
				c0.6-1.3,1.2-2.5,1.7-3.8c0.5-1.2,1-2.5,1.3-3.7c0.2-0.6,0.3-1.1,0.4-1.6c0-0.3,0.1-0.4,0.1-0.7c0-0.2,0-0.3,0-0.4l0-0.2
				c0-0.1,0-0.1,0-0.1l0-0.2c-0.1-0.3-0.1-0.5-0.2-0.8c-0.1-0.5-0.4-1.3-0.6-2.1c-0.2-0.8-0.4-1.8-0.4-3.2c0-0.2,0-0.3,0-0.5l0-0.4
				c0-0.2,0-0.5,0.1-0.7c0.1-0.5,0.2-1,0.3-1.5c0.5-2,1.3-3.8,2.5-5.5c2.4-3.4,5.9-5.7,10-6.6c4-0.8,8.2-0.3,11.9,1.7
				c1.8,1,3.4,2.4,4.7,4c0.7,0.8,1.2,1.7,1.7,2.7c0.5,1,0.9,2,1.1,3.1c0.5,2.1,0.6,4.3,0.2,6.3c-0.2,1-0.5,2-0.8,3
				c-0.4,1-0.8,1.8-1.3,2.6c-1.8,3-3.8,5.2-5.7,7.5c-1.9,2.3-3.9,4.5-5.9,6.6c-4,4.2-8.1,8.4-12.4,12.4l-3.2,2.9
				c-0.5,0.5-0.9,0.9-1.3,1.4c-0.4,0.5-0.8,1.1-1.1,1.7C144.5,76.7,143.6,79.5,142.3,82.1z'
            />
          </g>
          <g>
            <path
              fill={fill}
              d='M71.4,160.7c-0.3,0-0.4,0.3-0.7,0.4l0,0c-1.1,1.1-2.1,2.4-3.2,3.6l-1.6,1.8l-0.8,0.9
				c-0.2,0.3-0.5,0.6-0.7,0.9c-0.9,1.2-2,2.4-2.7,3.6c-0.4,0.6-0.7,1.2-1,1.7c-0.1,0.3-0.2,0.5-0.3,0.8l0,0.2c0,0,0,0,0,0.1
				l-0.1,0.5l0.1-0.4l0,0.5l0-0.4c0,0.4,0.1,0.9,0.2,1.3c0.1,0.5,0.2,1.1,0.2,1.7c0.1,0.6,0.1,1.3,0,1.9c0,0.7-0.1,1.4-0.2,2
				c-0.2,1.3-0.6,2.6-1.1,3.7c-0.5,1.2-1.1,2.3-1.9,3.4c-1.5,2.1-3.5,4-5.7,5.4c-2.3,1.4-4.9,2.3-7.5,2.6c-2.7,0.4-5.4,0.1-8-0.6
				c-1.3-0.4-2.5-0.9-3.8-1.5c-0.3-0.2-0.6-0.3-0.9-0.5l-0.8-0.5c-0.6-0.4-1.1-0.8-1.7-1.2c-1-0.9-2-1.8-2.9-2.9
				c-0.8-1-1.6-2.2-2.2-3.4c-1.3-2.4-2.1-5-2.2-7.8c-0.2-2.7,0.2-5.4,1.2-8c0.5-1.3,1.1-2.4,1.8-3.5c0.7-1.1,1.5-2.1,2.4-3.1
				c1.8-1.9,4-3.4,6.3-4.4c2.3-1,4.7-1.5,6.8-1.8l3-0.4c0.5-0.1,0.9-0.1,1.3-0.2c0.4-0.1,0.9-0.2,1.3-0.3c0.8-0.2,1.6-0.5,2.5-0.9
				c0.8-0.4,1.7-0.8,2.5-1.4c1.6-1,3.3-2.2,5-3.4l2.5-1.8l1.2-0.9l0.6-0.5c0.2-0.2,0.4-0.3,0.4-0.6c0.1,0.2,0,0.6-0.1,0.8
				c-0.1,0.2-0.2,0.5-0.3,0.7c-0.3,0.5-0.5,0.9-0.8,1.4c-0.5,0.9-1.2,1.8-1.7,2.6c-1.2,1.7-2.4,3.4-4,5c-1.5,1.7-3.2,3.1-5.4,4.3
				c-0.6,0.3-1.1,0.5-1.6,0.8c-0.5,0.2-1.1,0.4-1.6,0.6c-1,0.4-2,0.7-3,1c-1.9,0.6-3.5,1.3-4.8,2.1c-0.7,0.4-1.2,0.8-1.8,1.4
				c-0.6,0.5-1.1,1.1-1.5,1.6c-0.4,0.6-0.8,1.2-1.2,1.9c-0.3,0.7-0.6,1.4-0.8,2c-0.4,1.3-0.5,2.8-0.3,4.1c0.2,1.3,0.6,2.7,1.3,3.9
				c0.3,0.6,0.7,1.2,1.2,1.7c0.4,0.5,0.9,1,1.4,1.5c2.2,1.8,4.9,2.7,7.8,2.6c2.8-0.1,5.6-1.4,7.7-3.6c0.5-0.5,1-1.2,1.4-1.8
				c0.4-0.7,0.8-1.4,1-2c0.1-0.3,0.2-0.7,0.3-1c0.1-0.3,0.1-0.7,0.2-1.1c0.1-0.4,0.1-0.9,0.1-1.4c0-0.6,0-1.1,0.1-1.7l0-0.4l0.1-0.5
				l0.1-0.4l0.3-0.7l0.2-0.5l0.2-0.4c0.3-0.5,0.6-0.9,0.9-1.3c0.6-0.8,1.2-1.4,1.9-2c1.3-1.2,2.6-2.1,4-3.1c0.3-0.2,0.7-0.4,1-0.7
				c0.4-0.2,0.7-0.4,1.1-0.6c0.7-0.4,1.4-0.8,2.1-1.2c1.4-0.8,2.8-1.5,4.3-2.2l0,0C70.8,160.8,71.1,160.6,71.4,160.7z'
            />
          </g>
          <g>
            <path
              fill={fill}
              d='M133.9,109.7c0.2,0.1,0.4,0,0.7,0l0,0c1.4-0.2,2.8-0.6,4.2-0.9l2.1-0.4l1-0.2c0.3-0.1,0.7-0.2,1.1-0.2
				c1.3-0.4,2.7-0.6,3.9-1.1c1.2-0.4,2.3-0.9,2.8-1.5l-0.3,0.2l0.3-0.3l-0.3,0.3c0.2-0.3,0.4-0.6,0.6-0.9c0.2-0.4,0.5-0.8,0.9-1.3
				c0.3-0.4,0.7-0.9,1.1-1.3c0.5-0.5,0.9-0.8,1.4-1.2c0.9-0.7,1.9-1.3,2.9-1.8c1-0.5,2.1-0.9,3.2-1.2c2.1-0.6,4.5-0.8,6.7-0.6
				c2.3,0.2,4.5,0.8,6.7,1.8c2.1,1,4.1,2.4,5.7,4.3c0.8,0.9,1.5,1.9,2.1,3.1c0.3,0.6,0.6,1.2,0.8,1.7c0.2,0.6,0.5,1.2,0.6,1.9
				c1.4,5.1-0.1,10.6-3.5,14.4c-1.7,1.8-3.6,3.3-5.9,4.2c-2.1,0.9-4.3,1.5-6.6,1.6c-1.1,0.1-2.3,0.1-3.3,0c-1.1-0.1-2.3-0.3-3.3-0.6
				c-2.1-0.6-3.9-1.4-5.6-2.3c-1.6-0.8-3-1.7-4.4-2.2c-1.4-0.6-2.9-0.9-4.6-1.1c-0.8-0.1-1.6-0.2-2.5-0.3c-0.9-0.1-1.8-0.1-2.7-0.2
				c-1.8-0.1-3.6-0.3-5.3-0.3l0,0c-0.2,0-0.5,0-0.6,0.1c0.1-0.3,0.4-0.4,0.6-0.5l0,0c1.7-0.9,3.4-1.4,5.2-1.9
				c0.9-0.3,1.7-0.5,2.6-0.7c0.9-0.2,1.8-0.4,2.8-0.6c1.9-0.3,3.9-0.4,6-0.2c0.5,0.1,1,0.2,1.5,0.3c0.5,0.1,1,0.2,1.5,0.3
				c0.9,0.2,1.8,0.5,2.7,0.7c1.7,0.5,3.2,0.8,4.5,1c0.7,0.1,1.3,0.1,2,0c0.7,0,1.3-0.1,2-0.2c1.3-0.3,2.5-0.7,3.6-1.3
				c1-0.6,1.9-1.3,2.6-2.2c0.3-0.4,0.6-0.8,0.8-1.3c0.2-0.4,0.4-0.9,0.5-1.4c0.2-1,0.2-1.9,0-2.8c-0.5-1.9-1.9-3.7-4-4.9
				c-1-0.6-2.2-1-3.5-1.3c-1.3-0.3-2.5-0.3-3.9-0.2c-0.6,0.1-1.3,0.2-1.9,0.4c-0.6,0.2-1.3,0.4-1.8,0.7c-1.1,0.5-1.8,1.2-3.5,2.8
				l-0.3,0.3l0,0l-0.4,0.2l-0.3,0.2l-0.6,0.3l-0.5,0.2l-0.4,0.1c-0.5,0.2-0.9,0.3-1.4,0.3c-0.9,0.2-1.7,0.2-2.5,0.3
				c-0.8,0-1.6,0-2.3,0c-0.8,0-1.5-0.1-2.3-0.2c-0.4,0-0.7-0.1-1.1-0.1c-0.4,0-0.8-0.1-1.1-0.2c-0.7-0.1-1.4-0.2-2.2-0.4
				c-1.4-0.3-2.9-0.6-4.3-1l0,0C134.3,110,134,109.9,133.9,109.7z'
            />
          </g>
          <g>
            <path
              fill={fill}
              d='M114.5,96.2c1.3-1.3,2.4-2.4,3.3-3.5c0.9-1.1,1.6-2.1,2-3.1c0.1-0.2,0.2-0.4,0.3-0.7
				c0.1-0.3,0.2-0.5,0.3-0.7c0.2-0.5,0.3-0.9,0.3-1.3c0.2-0.9,0.2-1.7,0.2-2.6c0-0.9-0.1-1.6-0.3-2.5c-0.2-0.9-0.6-1.8-1-2.8
				c-0.9-2-2.7-4.1-5.4-6.6c3.3-1.6,7.4-1.3,10.8,0.9c1.7,1.1,3.2,2.7,4.2,4.5c1.1,1.9,1.7,4.1,1.7,6.3c0.1,2.2-0.4,4.4-1.4,6.3
				c-0.5,1-1.1,1.9-1.8,2.7c-0.3,0.4-0.7,0.8-1.1,1.1c-0.4,0.3-0.8,0.7-1.2,1c-1.7,1.2-3.7,1.9-5.5,2C118,97.3,116.2,97,114.5,96.2z
				'
            />
          </g>
          <g>
            <path
              fill={fill}
              d='M75.7,119.6c-0.1,1.9-0.3,3.4-0.3,4.9c0,1.4,0.2,2.6,0.5,3.6c0.1,0.3,0.2,0.4,0.2,0.7
				c0.1,0.3,0.2,0.5,0.3,0.7c0.2,0.5,0.4,0.9,0.6,1.2c0.5,0.8,0.9,1.5,1.5,2.1c0.6,0.6,1.1,1.2,1.9,1.7c0.7,0.5,1.6,1,2.6,1.5
				c2,0.9,4.7,1.4,8.4,1.6c-1.5,3.4-4.8,5.7-8.9,6.3c-2.1,0.2-4.1,0-6.2-0.8c-2-0.8-3.9-2.1-5.3-3.7c-1.4-1.6-2.5-3.6-3-5.7
				c-0.3-1.1-0.4-2.2-0.4-3.2c0-0.5,0-1,0.1-1.5c0.1-0.5,0.2-1.1,0.3-1.6c0.5-2,1.6-3.8,2.9-5.1C72.3,121.1,73.9,120.1,75.7,119.6z'
            />
          </g>

          <circle
            fill={fill}
            stroke={fill}
            strokeWidth='10'
            strokeLinecap='round'
            strokeMiterlimit='10'
            cx='71.4'
            cy='98.3'
            r='1'
          />

          <circle
            fill={fill}
            stroke={fill}
            strokeWidth='10'
            strokeLinecap='round'
            strokeMiterlimit='10'
            cx='114.1'
            cy='118'
            r='1'
          />

          <circle
            fill={fill}
            stroke={fill}
            strokeWidth='10'
            strokeLinecap='round'
            strokeMiterlimit='10'
            cx='102.1'
            cy='162.5'
            r='1'
          />
        </g>
      );

    case 'license':
      return (
        <g id='license-fill'>
          <g>
            <g>
              <g>
                <path
                  fill={fill}
                  d='M177.7,108.8c4.1-4.6,5.4-8.9,3.7-12.9c-0.3-0.6-0.6-1.2-1-1.8c-0.2-0.6-0.4-1.3-0.7-1.9
						c-1.9-3.8-5.9-5.6-11.8-5.6c-0.1,0-0.3,0-0.4,0c0.6-6.1-1-10.3-4.7-12.6c-3.7-2.3-8.2-1.7-13.3,1.6c-2.7-5.5-6.2-8.3-10.6-8.3
						c-0.7,0-1.3,0.1-2,0.2c-0.7-0.1-1.3-0.1-2-0.1c-4.3,0.4-7.6,3.5-9.8,9.2c-5.5-2.8-10-3-13.4-0.4c-0.5,0.4-1,0.9-1.5,1.4
						c-0.6,0.3-1.1,0.7-1.6,1.1c-3.2,2.9-4,7.3-2.4,13.2c-6.1,1-9.8,3.5-11,7.7c-0.2,0.6-0.3,1.3-0.4,2c-0.3,0.6-0.5,1.2-0.6,1.9
						c-0.9,4.2,1.1,8.3,5.9,12.1c-4.3,4.4-5.7,8.7-4.3,12.7c0.2,0.6,0.5,1.2,0.9,1.8c0.1,0.7,0.3,1.3,0.6,1.9
						c1.8,3.9,5.8,6,11.9,6.2c-0.8,6.1,0.5,10.4,4.1,12.8c0.6,0.4,1.2,0.7,1.8,0.9c0.5,0.4,1,0.8,1.6,1.2c3.8,2.1,8.2,1.4,13.3-2.1
						c2.8,5.2,6.4,7.8,10.5,7.8c0.1,0,0.3,0,0.4,0c0.7,0,1.3-0.1,2-0.3c0.7,0.1,1.3,0.1,2,0c4.3-0.6,7.4-3.8,9.4-9.6
						c5.6,2.6,10.1,2.5,13.4-0.2c0.5-0.4,1-0.9,1.4-1.4c0.6-0.3,1.1-0.8,1.6-1.2c3.1-3,3.7-7.5,1.8-13.3c6-1.2,9.6-4,10.7-8.1
						c0.2-0.6,0.3-1.3,0.3-2c0.3-0.6,0.4-1.3,0.6-1.9C184.8,116.4,182.6,112.4,177.7,108.8z M139.1,136.7
						c-13.1,0-23.7-10.6-23.7-23.7s10.6-23.7,23.7-23.7c13.1,0,23.7,10.6,23.7,23.7S152.2,136.7,139.1,136.7z'
                />
              </g>
            </g>
          </g>
          <g>
            <g>
              <path
                fill={fill}
                d='M165.2,189.9c-0.9,0-1.8-0.2-2.7-0.6l-23.4-11.9l-23.4,11.9c-1.8,0.9-4,0.8-5.7-0.2
					c-1.7-1.1-2.8-2.9-2.8-5v-41.9c0-3.2,2.6-5.8,5.8-5.8c3.2,0,5.8,2.6,5.8,5.8v32.4l17.5-9c1.7-0.9,3.6-0.9,5.3,0l17.5,9v-27.7
					c0-3.2,2.6-5.8,5.8-5.8s5.8,2.6,5.8,5.8v37.3c0,2-1.1,3.9-2.8,5C167.3,189.6,166.2,189.9,165.2,189.9z'
              />
            </g>
          </g>
          <g>
            <g>
              <path
                fill='none'
                stroke={fill}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                d='M154.5,165.8'
              />
            </g>
          </g>
          <g>
            <g>
              <path
                fill={fill}
                d='M89.7,179h-66c-10,0-18.1-7.6-18.1-17V19.7c0-9.4,8.1-17,18.1-17h116.8c10,0,18.1,7.6,18.1,17v41.2
					c0,2.6-2.1,4.8-4.6,4.8c-2.5,0-4.6-2.1-4.6-4.8V19.7c0-4.1-4.1-7.5-8.9-7.5H23.7c-4.8,0-8.9,3.4-8.9,7.5V162
					c0,4.1,4.1,7.5,8.9,7.5h66c2.5,0,4.6,2.1,4.6,4.8C94.3,176.9,92.2,179,89.7,179z'
              />
            </g>
          </g>
        </g>
      );
    case 'measurementTechnique':
      return (
        <g>
          <g>
            <path
              fill={fill}
              d='M170.5,191.8H7.2c-2.8,0-5-2.2-5-5V38c0-2,1.2-3.8,3-4.6c1.8-0.8,3.9-0.5,5.4,0.9l163.3,148.8
            c1.5,1.4,2,3.6,1.3,5.5C174.4,190.5,172.6,191.8,170.5,191.8z M12.2,181.8h145.3L12.2,49.3V181.8z M83.9,155.5H38.5
            c-2.8,0-5-2.2-5-5v-41.3c0-2,1.2-3.8,3-4.6c1.8-0.8,3.9-0.5,5.4,0.9l45.4,41.3c1.5,1.4,2,3.6,1.3,5.5
            C87.8,154.2,85.9,155.5,83.9,155.5z M43.5,145.5H71l-27.4-25V145.5z'
            />
          </g>
          <g>
            <rect
              x='26.3'
              y='65.1'
              transform='matrix(0.6759 -0.737 0.737 0.6759 -41.0334 46.8887)'
              fill={fill}
              width='13'
              height='10'
            />
          </g>
          <g>
            <rect
              x='46.7'
              y='84.2'
              transform='matrix(0.6759 -0.737 0.737 0.6759 -48.4679 68.1107)'
              fill={fill}
              width='13'
              height='10'
            />
          </g>
          <g>
            <rect
              x='39.2'
              y='74.6'
              transform='matrix(0.6755 -0.7374 0.7374 0.6755 -44.764 57.5429)'
              fill={fill}
              width='7.6'
              height='10'
            />
          </g>
          <g>
            <rect
              x='67.1'
              y='103.2'
              transform='matrix(0.6755 -0.7373 0.7373 0.6755 -55.9093 89.3792)'
              fill={fill}
              width='13'
              height='10'
            />
          </g>
          <g>
            <rect
              x='59.6'
              y='93.7'
              transform='matrix(0.6755 -0.7373 0.7373 0.6755 -52.195 78.7683)'
              fill={fill}
              width='7.6'
              height='10'
            />
          </g>
          <g>
            <rect
              x='87.5'
              y='122.3'
              transform='matrix(0.6755 -0.7373 0.7373 0.6755 -63.3418 110.6108)'
              fill={fill}
              width='13'
              height='10'
            />
          </g>
          <g>
            <rect
              x='80'
              y='112.7'
              transform='matrix(0.6756 -0.7373 0.7373 0.6756 -59.6295 99.9838)'
              fill={fill}
              width='7.6'
              height='10'
            />
          </g>
          <g>
            <rect
              x='107.9'
              y='141.3'
              transform='matrix(0.6755 -0.7374 0.7374 0.6755 -70.7788 131.8499)'
              fill={fill}
              width='13'
              height='10'
            />
          </g>
          <g>
            <rect
              x='100.4'
              y='131.8'
              transform='matrix(0.6756 -0.7373 0.7373 0.6756 -67.0625 121.2135)'
              fill={fill}
              width='7.6'
              height='10'
            />
          </g>
          <g>
            <rect
              x='128.3'
              y='160.4'
              transform='matrix(0.6756 -0.7373 0.7373 0.6756 -78.2096 153.0533)'
              fill={fill}
              width='13'
              height='10'
            />
          </g>
          <g>
            <rect
              x='120.8'
              y='150.9'
              transform='matrix(0.6754 -0.7375 0.7375 0.6754 -74.5017 142.4915)'
              fill={fill}
              width='7.6'
              height='10'
            />
          </g>
          <g>
            <path
              fill={fill}
              d='M166.4,159.6c-1.5,0-2.9-0.5-4-1.6L27.4,34.3c-2.4-2.2-2.6-6-0.4-8.4L47.8,3.2c1.1-1.2,2.5-1.9,4.1-1.9
            c1.6-0.1,3.1,0.5,4.3,1.6l135,123.7c1.2,1.1,1.9,2.5,1.9,4.1c0.1,1.6-0.5,3.1-1.6,4.3l-20.8,22.7c-1.1,1.2-2.5,1.9-4.1,1.9
            C166.6,159.6,166.5,159.6,166.4,159.6z M169.1,150.6L169.1,150.6C169.1,150.6,169.1,150.6,169.1,150.6z M37.1,29.7l129,118.2
            l15.3-16.7L52.4,13L37.1,29.7z M184.4,133.9C184.4,133.9,184.4,133.9,184.4,133.9L184.4,133.9z'
            />
          </g>
          <line
            fill='none'
            stroke={fill}
            strokeWidth='10'
            strokeLinejoin='round'
            x1='160.1'
            y1='149.7'
            x2='174.8'
            y2='133.6'
          />
          <g>
            <rect
              x='140.5'
              y='122'
              transform='matrix(0.6756 -0.7373 0.7373 0.6756 -44.4907 152.81)'
              fill={fill}
              width='21.8'
              height='10'
            />
          </g>
          <g>
            <rect
              x='150'
              y='132.7'
              transform='matrix(0.6756 -0.7373 0.7373 0.6756 -50.7717 159.9353)'
              fill={fill}
              width='12.7'
              height='10'
            />
          </g>
          <g>
            <rect
              x='124.5'
              y='107.3'
              transform='matrix(0.6756 -0.7373 0.7373 0.6756 -38.8553 136.2031)'
              fill={fill}
              width='21.8'
              height='10'
            />
          </g>
          <g>
            <rect
              x='134'
              y='118'
              transform='matrix(0.676 -0.7369 0.7369 0.676 -45.1466 143.23)'
              fill={fill}
              width='12.7'
              height='10'
            />
          </g>
          <g>
            <rect
              x='108.4'
              y='92.5'
              transform='matrix(0.6756 -0.7373 0.7373 0.6756 -33.2206 119.5965)'
              fill={fill}
              width='21.8'
              height='10'
            />
          </g>
          <g>
            <rect
              x='117.9'
              y='103.2'
              transform='matrix(0.6756 -0.7373 0.7373 0.6756 -39.499 126.7293)'
              fill={fill}
              width='12.7'
              height='10'
            />
          </g>
          <g>
            <rect
              x='92.4'
              y='77.8'
              transform='matrix(0.6755 -0.7374 0.7374 0.6755 -27.5806 103.0108)'
              fill={fill}
              width='21.8'
              height='10'
            />
          </g>
          <g>
            <rect
              x='101.9'
              y='88.5'
              transform='matrix(0.6756 -0.7373 0.7373 0.6756 -33.8641 110.1227)'
              fill={fill}
              width='12.7'
              height='10'
            />
          </g>
          <g>
            <rect
              x='76.3'
              y='63.1'
              transform='matrix(0.6755 -0.7374 0.7374 0.6755 -21.9454 86.4055)'
              fill={fill}
              width='21.8'
              height='10'
            />
          </g>
          <g>
            <rect
              x='85.8'
              y='73.8'
              transform='matrix(0.676 -0.7369 0.7369 0.676 -28.2357 93.4532)'
              fill={fill}
              width='12.7'
              height='10'
            />
          </g>
          <g>
            <rect
              x='60.3'
              y='48.4'
              transform='matrix(0.6755 -0.7374 0.7374 0.6755 -16.3106 69.7959)'
              fill={fill}
              width='21.8'
              height='10'
            />
          </g>
          <g>
            <rect
              x='69.8'
              y='59.1'
              transform='matrix(0.6756 -0.7373 0.7373 0.6756 -22.5912 76.9164)'
              fill={fill}
              width='12.7'
              height='10'
            />
          </g>
          <g>
            <rect
              x='44.2'
              y='33.7'
              transform='matrix(0.6755 -0.7373 0.7373 0.6755 -10.674 53.189)'
              fill={fill}
              width='21.8'
              height='10'
            />
          </g>
          <g>
            <rect
              x='53.7'
              y='44.4'
              transform='matrix(0.676 -0.7369 0.7369 0.676 -16.9606 60.271)'
              fill={fill}
              width='12.7'
              height='10'
            />
          </g>
          <g>
            <rect
              x='37.7'
              y='29.7'
              transform='matrix(0.6756 -0.7373 0.7373 0.6756 -11.3184 43.7104)'
              fill={fill}
              width='12.7'
              height='10'
            />
          </g>
        </g>
      );
    case 'species':
      return (
        <g>
          <g>
            <g>
              <path
                fill={fill}
                d='M32,107.7c1.9-2.8,4.6-5,7.7-6.4l-9-9.5c-2.5,2.4-5.8,4.1-9.4,4.7L32,107.7z'
              />
              <path
                fill={fill}
                d='M104,71V37.6c-1.6,0.5-3.3,0.7-5,0.7c-1.7,0-3.4-0.3-5-0.7V71c1.6-0.5,3.3-0.7,5-0.7
      C100.7,70.2,102.4,70.5,104,71z'
              />
              <path
                fill={fill}
                d='M67.5,67.5l14,16.7c0.8-3.6,2.8-6.8,5.4-9.2L75.2,61.1C73.3,63.9,70.6,66.1,67.5,67.5z'
              />
              <path
                fill={fill}
                d='M31.9,127.8l-7.3,12.5c3.4,0.7,6.4,2.4,8.8,4.8l6.3-10.7C36.5,133,33.8,130.7,31.9,127.8z'
              />
              <path
                fill={fill}
                d='M164,107l7.4-7.8c-3.5-0.7-6.7-2.5-9.1-4.9l-6.7,7.1C158.9,102.4,161.8,104.4,164,107z'
              />
              <path
                fill={fill}
                d='M132.3,182H104v-34.9l31.2-18.3c-1.9-2.8-3.1-6.1-3.2-9.7l-28,16.4v-29.8c-1.6,0.5-3.3,0.7-5,0.7
      c-1.7,0-3.4-0.3-5-0.7v31.4l-29.1-17c-0.4,3.5-1.8,6.7-4,9.3L94,148.7V182H65.7c-2.8,0-5,2.2-5,5s2.2,5,5,5h66.6
      c2.8,0,5-2.2,5-5S135.1,182,132.3,182z'
              />
              <path
                fill={fill}
                d='M121.9,61.1l-11.2,13.4c2.7,2.3,4.7,5.3,5.7,8.8l13.2-15.8C126.5,66.1,123.8,63.9,121.9,61.1z'
              />
              <path
                fill={fill}
                d='M169.3,138l-4.9-8.4c-2.1,2.7-4.9,4.8-8.1,6l4.2,7.2C162.9,140.4,166,138.7,169.3,138z'
              />
            </g>
          </g>
          <g>
            <path
              fill={fill}
              d='M18.3,60.6c-10,0-18.1,8.1-18.1,18.1c0,10,8.1,18.1,18.1,18.1c10,0,18.1-8.1,18.1-18.1
    C36.4,68.6,28.3,60.6,18.3,60.6z M18.3,91.9C11,91.9,5,86,5,78.6c0-7.4,6-13.3,13.3-13.3c7.4,0,13.3,6,13.3,13.3
    C31.7,86,25.7,91.9,18.3,91.9z'
            />
            <path
              fill={fill}
              d='M99,2.1c-10,0-18.1,8.1-18.1,18.1S89,38.3,99,38.3s18.1-8.1,18.1-18.1S109,2.1,99,2.1z M99,33.5
    c-7.4,0-13.3-6-13.3-13.3S91.7,6.9,99,6.9s13.3,6,13.3,13.3S106.4,33.5,99,33.5z'
            />
            <path
              fill={fill}
              d='M154.1,46.1c-2.9-9.6-13-15-22.6-12.1s-15,13-12.1,22.6c2.9,9.6,13,15,22.6,12.1S157,55.6,154.1,46.1z
     M140.6,64.1c-7,2.1-14.5-1.8-16.6-8.9s1.8-14.5,8.9-16.6s14.5,1.8,16.6,8.9C151.6,54.5,147.7,61.9,140.6,64.1z'
            />
            <path
              fill={fill}
              d='M65.5,33.6C56,30.7,45.9,36.1,43,45.6c-2.9,9.6,2.5,19.7,12.1,22.6s19.7-2.5,22.6-12.1
    S75.1,36.5,65.5,33.6z M73,54.7c-2.1,7-9.6,11-16.6,8.9s-11-9.6-8.9-16.6s9.6-11,16.6-8.9S75.2,47.7,73,54.7z'
            />
            <path
              fill={fill}
              d='M99,70.2c-10,0-18.1,8.1-18.1,18.1c0,10,8.1,18.1,18.1,18.1s18.1-8.1,18.1-18.1
    C117.1,78.3,109,70.2,99,70.2z M99,101.6c-7.4,0-13.3-6-13.3-13.3C85.7,81,91.7,75,99,75s13.3,6,13.3,13.3
    C112.3,95.7,106.4,101.6,99,101.6z'
            />
            <path
              fill={fill}
              d='M47,99.8c-10,0-18.1,8.1-18.1,18.1S37,135.9,47,135.9s18.1-8.1,18.1-18.1S57,99.8,47,99.8z M47,131.2
    c-7.4,0-13.3-6-13.3-13.3s6-13.3,13.3-13.3s13.3,6,13.3,13.3S54.3,131.2,47,131.2z'
            />
            <path
              fill={fill}
              d='M150.1,100.5c-10,0-18.1,8.1-18.1,18.1c0,10,8.1,18.1,18.1,18.1s18.1-8.1,18.1-18.1
    C168.2,108.6,160.1,100.5,150.1,100.5z M150.1,131.9c-7.4,0-13.3-6-13.3-13.3s6-13.3,13.3-13.3s13.3,6,13.3,13.3
    S157.4,131.9,150.1,131.9z'
            />
            <path
              fill={fill}
              d='M175.1,63.4c-10,0-18.1,8.1-18.1,18.1c0,10,8.1,18.1,18.1,18.1s18.1-8.1,18.1-18.1
    C193.1,71.5,185,63.4,175.1,63.4z M175.1,94.8c-7.4,0-13.3-6-13.3-13.3s6-13.3,13.3-13.3s13.3,6,13.3,13.3S182.4,94.8,175.1,94.8
    z'
            />
            <path
              fill={fill}
              d='M173.3,137.5c-10,0-18.1,8.1-18.1,18.1s8.1,18.1,18.1,18.1c10,0,18.1-8.1,18.1-18.1
    S183.3,137.5,173.3,137.5z M173.3,168.9c-7.4,0-13.3-6-13.3-13.3s6-13.3,13.3-13.3c7.4,0,13.3,6,13.3,13.3
    S180.6,168.9,173.3,168.9z'
            />
            <path
              fill={fill}
              d='M20.7,139.9c-10,0-18.1,8.1-18.1,18.1c0,10,8.1,18.1,18.1,18.1c10,0,18.1-8.1,18.1-18.1
    C38.8,148,30.7,139.9,20.7,139.9z M20.7,171.3c-7.4,0-13.3-6-13.3-13.3c0-7.4,6-13.3,13.3-13.3c7.4,0,13.3,6,13.3,13.3
    C34,165.3,28,171.3,20.7,171.3z'
            />
          </g>
        </g>
      );
    default:
      return (
        <g>
          <path
            fill={fill}
            stroke={stroke}
            strokeWidth='10'
            d='M198,2v196H2V2H198 M200,0H0v200h200V0L200,0z'
          />
          <line
            stroke={stroke}
            strokeWidth='10'
            strokeMiterlimit='10'
            x1='1.95'
            y1='1.54'
            x2='198.05'
            y2='198.46'
          />
          <line
            stroke={stroke}
            strokeWidth='10'
            strokeMiterlimit='10'
            x1='1.85'
            y1='198.15'
            x2='198.15'
            y2='1.85'
          />
        </g>
      );
  }
};

export default Glyph;
