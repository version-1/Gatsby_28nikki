import React from 'react'
import Image from "../../components/image"
import styled from 'styled-components'
import { Styles } from '../../../styles/style'

const Pict = styled.div`
  width: 100px;
  border: 1px solid #ccc;
  border-radius: 50px;
`

const Voice = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: ${Styles.FONT_SIZE.DEFAULT}px;
  background: ${Styles.COLOR.LIGHTGLAY};
`

const Fukidasi = (data) => {
    return(
        <div>
            <Pict>
                <Image filename={data} alt="顔"
                    imgStyle= {{
                        width: '100%',
                        height: '100%', 
                        borderRadius: '4px',
                    }}　
                    />
            </Pict>
            <Voice>
                これが表示されて欲しい。
                {/* {comment} */}
            </Voice>
            {/* <img src={url} /> */}
        </div>
    )
}
export default Fukidasi