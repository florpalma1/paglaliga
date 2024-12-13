
import { FormularioResultados } from "./FormularioResultados"
import { RegistroEquipos }from "./RegistroEquipos"
import { TablaPosiciones } from "./TablaPosiciones"

export const PaginaEquipos = () => {
  return (
    <div>
        <RegistroEquipos/>
        <FormularioResultados/>
        <TablaPosiciones/>
    </div>
  )
}
