const Aside = () => {
    return <aside>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Crear Cuenta</label>
                <input type="text" readonly class="form-control-plaintext" id="staticEmail"
                    value="Correo electronico"></input>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">Recibir ofertas especiales por correo</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Crear</button>
        </form>


            </aside>;
}

            export default Aside;