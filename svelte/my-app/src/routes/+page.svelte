<head>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sondres spillotek</title>

</head>
<body>

    <div id="container">
        <div id="header1">

            <img src="./src/routes/img/face.png" alt="" id="face">
            <h1>Sondres Spillsamling</h1>
            <img src="./src/routes/img/face.png" alt="" id="face">

        </div>

        <div id="header2">
            <div class="dropdown">
                <button class="dropbtn">Filtrer</button>
                <div class="dropdown-content">
                    <br>
                    <div>

                        <input type="checkbox" id="Alle" name="Alle" bind:checked={allcheck} on:change={allfunc}>
                        <label for="Alle">Alle</label>

                    </div>

                    <br>

                    <div>
                        <input type="checkbox" id="DS" class="filter" name="DS" bind:checked={DScheck}>
                        <label for="DS">DS</label>
                    </div>
                    <div>
                        <input type="checkbox" id="DS3" class="filter" name="DS3" bind:checked={DS3check}>
                        <label for="DS3">3DS</label>
                    </div>
                    <div>
                        <input type="checkbox" id="GameBoy" class="filter" name="GameBoy" bind:checked={GBcheck}>
                        <label for="GameBoy">GameBoy</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Switch" class="filter" name="Switch" bind:checked={Switchcheck}>
                        <label for="Switch">Switch</label>
                    </div>
                    <div>
                        <input type="checkbox" id="PS2" class="filter" name="PS2" bind:checked={PS2check}>
                        <label for="PS2">PS2</label>
                    </div>
                    <div>
                        <input type="checkbox" id="PC" class="filter" name="PC" bind:checked={PCcheck}>
                        <label for="PC">PC</label>
                    </div>

                    <br>
                                           
                </div>
                
            </div>
            <div id="search">
                <input type="text" placeholder="søk etter spill" bind:value={search}>

            </div>
            
        </div>

        <div class="text">
            
            {#if search}
                {#each allgames as platformlist}   
                    {#each platformlist as {title, platform, physical}}
                        {#if title.toLowerCase().includes(search.toLowerCase())}

                            <Gamecard title={title} platform={platform} physical={physical}></Gamecard>

                        {/if}
                    {/each}
                {/each}
            {:else}
                {#if DScheck}
                    {#each DSgames as {title, platform, physical}}

                        <Gamecard title={title} platform={platform} physical={physical}></Gamecard>

                    {/each}
                {/if}
                {#if DS3check}
                    {#each DS3games as {title, platform, physical}}

                        <Gamecard title={title} platform={platform} physical={physical}></Gamecard>

                    {/each}
                {/if}
                {#if GBcheck}
                    {#each GBgames as {title, platform, physical}}

                        <Gamecard title={title} platform={platform} physical={physical}></Gamecard>

                    {/each}
                {/if}
                {#if Switchcheck}
                    {#each Switchgames as {title, platform, physical}}

                        <Gamecard title={title} platform={platform} physical={physical}></Gamecard>

                    {/each}
                {/if}
                {#if PS2check}
                    {#each PS2games as {title, platform, physical}}

                        <Gamecard title={title} platform={platform} physical={physical}></Gamecard>

                    {/each}
                {/if}
                {#if PCcheck}
                    {#each PCgames as {title, platform, physical}}

                        <Gamecard title={title} platform={platform} physical={physical}></Gamecard>

                    {/each}
                {/if}
            {/if}
        </div>

    </div>


</body>

<script>
    import Gamecard from "./Gamecard.svelte";

    export let data;
    //console.log(data.spill)

    let DScheck = true
    let DS3check = true
    let GBcheck = true
    let Switchcheck = true
    let PS2check = true
    let PCcheck = true

    let allcheck = true
    function allfunc(){
        if (!allcheck){
            if (DScheck){
                DScheck = false
            }
            if (DS3check){
                DS3check = false
            }
            if (GBcheck){
                GBcheck = false
            }
            if (Switchcheck){
                Switchcheck = false
            }
            if (PS2check){
                PS2check = false
            }
            if (PCcheck){
                PCcheck = false
            }
        }
        if (allcheck){
            if (!DScheck){
                DScheck = true
            }
            if (!DS3check){
                DS3check = true
            }
            if (!GBcheck){
                GBcheck = true
            }
            if (!Switchcheck){
                Switchcheck = true
            }
            if (!PS2check){
                PS2check = true
            }
            if (!PCcheck){
                PCcheck = true
            }
        }
    }


    let DSgames = []
    let DS3games = []
    let GBgames = []
    let Switchgames = []
    let PS2games = []
    let PCgames = []

    for (let i = 0; i < data.spill.length; i++) {
        let s = data.spill[i]
        //console.log(s.title, s.platform, s.physical)

        let p = s.platform
        if (p == "DS"){
            DSgames.push(s)
        }else if (p == "3DS"){
            DS3games.push(s)
        }else if (p == "GameBoy"){
            GBgames.push(s)
        }else if (p == "Switch"){
            Switchgames.push(s)
        }else if (p == "PS2"){
            PS2games.push(s)
        }else if (p == "PC"){
            PCgames.push(s)
        }
    }

    let search = ""

    let allgames = [DSgames, DS3games, GBgames, Switchgames, PS2games, PCgames]
    
</script>

<style>
body{
    background-color: white;
    color: black;
}
#container{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

#header1{
    display: flex;
    justify-content: center;
    z-index: -1;
    
    padding: 1px;

    text-align: center;
    background: #0b741c;
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 25px; 
}
#face{
    
    height: 100px;
}



#header2{
    padding: 0px;
    padding-left: 0px;
    text-align: left;
    background: #969696;
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 10px;
    position: sticky;
    top: 0;
    display: flex;
    
}

/* Dropdown Button */
.dropbtn {
    background-color: #969696;
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    padding: 15px;
    
    font-size: large;
    border: none;
  }
  
  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
    padding-left: 0px;
    font-size: 20px;
    color: black;
  }
  
  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
      
    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {display: block;}
    
    /* Change the background color of the dropdown button when the dropdown content is shown */
    .dropdown:hover .dropbtn {background-color: #3e8e41;}
    
#search{
    position:absolute;
    top:15px;
    left: 85px;

}

.text{
    z-index: 1;
    font-size: larger;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

</style>