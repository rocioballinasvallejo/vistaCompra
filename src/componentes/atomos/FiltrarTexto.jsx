import '../../assets/styles/Filtrar.css'

function FiltrarTexto(props) {
    return (
        <div class="contenedorTextoFiltrar">
            <p class="txtHastaRocio">{props.tituloFiltro}</p>
        </div>
    );
}

export default FiltrarTexto;