import styled from 'styled-components'


export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin:  0 15px;
    min-height: 600px;
 
    
    

    .slide-item{
        
    margin: auto;
    width: 60%;
    height: 100%;
    width: 100%;
    position: relative;
    
}
.slide-item .quote{
    position: relative;
    height:20%;
    width: 20%;
    
}


.user{
    display:flex;
    margin-bottom: 10px;
    /* height: 50px; */
}
.avatar{
    width: 20%;
}
.text{
    height: 100%;
     line-height: normal;
}
.text p{
    margin-bottom:0;
    margin-top:0;
    line-height: normal;

}
.text span{
    font-weight: bold;

}

.user img{
    margin-right:10px;
    height: 7em;
    width: 7em;
}
`










