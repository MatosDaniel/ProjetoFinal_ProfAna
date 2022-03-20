<template>
            <header class="masthead">
                <div class="d-flex justify-content-center">
                    <div class="text-center" style="margin-top: 7%">
                        <h2 class="text-white-50 mx-auto mt-2 mb-5" style="font-size: 25pt;">Página do Administrador</h2>
                    </div>
                </div>
                <p class="text-white-50 minititles">1. Adicionar um novo conjunto foto/texto:</p>
                <p class="text-white-50 addtext"> Insira o título da mensagem</p>
                <input class="caixaTexto" type="text" name="texto" maxlength="300" size="100">
                <p class="text-white-50 addtext" style="margin-top:2%"> Insira o texto que pretende que acompanhe a mensagem:</p>
                <textarea rows="1" class="auto_height" oninput="auto_height(this)"></textarea>
                <p class="text-white-50 addtext" style="margin-top:2%"> Insira a imagem que pretende que acompanhe a mensagem:</p>
                <input class="caixaTexto" type="file" accept="image/png, image/jpeg" name="imagem" style="color:rgb(139, 139, 139)" > 
                
        </header>
</template>