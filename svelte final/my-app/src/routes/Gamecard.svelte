<script>
    export let title
    export let platform
    export let physical

    let src = "./src/routes/img/"

    if (platform == "DS"){
        src += "DS.png"
    }else if (platform == "3DS"){
        src += "3DS.png"
    }else if (platform == "GameBoy"){
        src += "GameBoy.png"
    }else if (platform == "Switch"){
        src += "Switch.png"
    }else if (platform == "PS2"){
        src += "PS2.png"
    }else if (platform == "PC"){
        src += "PC.png"
    }

    let src2 = "./src/routes/img/"
    if (physical){
        src2 += "phy.png"
    }else{
        src2 += "dig.png"
    }
</script>

<div>
    <img {src} alt="platformlogo" id="platformicon"/>
    
    <img src="{src2}" alt="phy/dig" id="phydigicon">
    

    <p>{title}</p>

</div>

<style>
    div{
        background-color: white;
        color: black;
        border: 1px double black;
        display: flex;
        align-items: center;
        
    }
    img{
        height: 50px;

    }
    #phydigicon{
        height: 30px;
        width: 30px;
        padding-right: 5px;
    }

</style>