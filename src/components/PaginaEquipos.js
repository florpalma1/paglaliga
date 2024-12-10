import { FormularioEquipos } from "./FormularioEquipos"
import { FormularioResultados } from "./FormularioResultados"
import { TablaPosiciones } from "./TablaPosiciones"

export const PaginaEquipos = () => {
  return (
    <div>
        <FormularioEquipos/>
        <FormularioResultados/>
        <TablaPosiciones/>
    </div>
  )
}
