import React from 'react'
import styled from 'styled-components'

const First = (props) => {
    const {toggle} =props

  return (
    <FirstContainer>
         <h1 className = "h2">Apple Watch Studio<br/><span className="h1">Choose a case.<br/> Pick a band. <br/> Create Your Own Style.</span>
    </h1>
    <button onClick = {toggle}>Get Started</button>
    <div class="rf-designstudio-combinedimage" tabindex="-1" aria-hidden="false" role="img" aria-label="46mm Jet Black Aluminum Case with Black Solo Loop Front view">
        <img alt="" class="topimage" aria-hidden="true" width="500" height="500" src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&amp;hei=1000&amp;fmt=png-alpha&amp;.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"/>
        <img alt="" class="bottomimage" aria-hidden="true" width="500" height="500" src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM"/>
    </div>
    <img width="500" height="500" alt="46mm Jet Black Aluminum Case with Black Solo Loop Side view" src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA" class="rf-designstudio-toggleimage" aria-hidden="true">
    </img>
    </FirstContainer> 
    
  )
}

export default First

const FirstContainer = styled.div`
button{
    cursor: pointer;
}

.h2{
    color: #1d1d1f;
    font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 21px;
    font-weight: 400;
    letter-spacing: .011em;
    line-height: 1.381002381;
    padding-bottom: 10px;
    display: block;
}
.h1{
    font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 64px;
    font-weight: 600;
    letter-spacing: -.009em;
    line-height: 1.0625;
    color:#1d1d1f;
}
button{
    display:flex;
    margin: 43px 0 0;
    font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -.022em;
    line-height: 1.1764805882;
    padding: 22px;
    background-color:#0071e3;
    border:0px;
    border-radius:10px;
    color:white;
    height:30px;
    width:130px;
    text-align:center;
    align-items:center;
}

.topimage{
    position:absolute;
    margin-left:400px;

}
.bottomimage{
    margin-left:400px;
}   
`