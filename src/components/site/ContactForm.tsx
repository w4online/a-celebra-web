import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const tiposEvento = [
  "Cumpleaños",
  "Comunión",
  "Bautizo",
  "Boda",
  "Baby shower",
  "Aniversario",
  "Fiesta temática",
  "Regalo personalizado",
  "Empresa",
  "Otro",
];

type Errores = Record<string, string>;

export function ContactForm() {
  const [errores, setErrores] = useState<Errores>({});
  const [enviando, setEnviando] = useState(false);
  const [privacidad, setPrivacidad] = useState(false);
  const [archivo, setArchivo] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nuevos: Errores = {};

    const nombre = String(data.get("nombre") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").trim();
    const descripcion = String(data.get("descripcion") ?? "").trim();

    if (nombre.length < 2) nuevos["nombre"] = "Cuéntanos tu nombre.";
    if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email))
      nuevos["email"] = "Introduce un correo electrónico válido.";
    if (!/^[+\d][\d\s().-]{7,}$/.test(telefono))
      nuevos["telefono"] = "Introduce un teléfono de contacto válido.";
    if (descripcion.length < 10)
      nuevos["descripcion"] = "Describe tu idea con un poco más de detalle.";
    if (!privacidad) nuevos["privacidad"] = "Debes aceptar la política de privacidad.";


    setErrores(nuevos);
    if (Object.keys(nuevos).length > 0) {
      toast.error("Revisa los campos marcados, por favor.");
      return;
    }

    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      e.currentTarget?.reset?.();
      setPrivacidad(false);
      setArchivo(null);
      toast.success("¡Solicitud enviada! Te responderemos lo antes posible.");
    }, 700);
  };

  const err = (campo: string) =>
    errores[campo] ? (
      <p className="mt-1.5 text-xs text-destructive">{errores[campo]}</p>
    ) : null;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[2rem] border border-border/70 bg-card p-7 shadow-[var(--shadow-card)] sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="nombre">Nombre *</Label>
          <Input id="nombre" name="nombre" autoComplete="name" className="mt-2" />
          {err("nombre")}
        </div>
        <div>
          <Label htmlFor="telefono">Teléfono *</Label>
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            className="mt-2"
          />
          {err("telefono")}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="email">Correo electrónico *</Label>
          <Input id="email" name="email" type="email" autoComplete="email" className="mt-2" />
          {err("email")}
        </div>
        <div>
          <Label htmlFor="tipo">Tipo de evento</Label>
          <select
            id="tipo"
            name="tipo"
            className="mt-2 h-10 w-full cursor-pointer rounded-full border border-input bg-background px-4 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
            defaultValue=""
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {tiposEvento.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="fecha">Fecha del evento</Label>
          <Input id="fecha" name="fecha" type="date" className="mt-2" />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="productos">Producto o productos que te interesan</Label>
          <Input
            id="productos"
            name="productos"
            placeholder="Bolsas de chuches, taza personalizada, cartel de madera…"
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="cantidad">Cantidad aproximada</Label>
          <Input
            id="cantidad"
            name="cantidad"
            type="number"
            min={1}
            placeholder="25"
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="presupuesto">Presupuesto orientativo (€)</Label>
          <Input
            id="presupuesto"
            name="presupuesto"
            placeholder="Entre 100 € y 200 €"
            className="mt-2"
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="descripcion">Descripción de la idea *</Label>
          <Textarea
            id="descripcion"
            name="descripcion"
            rows={5}
            placeholder="Cuéntanos colores, temática, nombres, número de invitados…"
            className="mt-2 rounded-2xl"
          />
          {err("descripcion")}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="referencia">Adjuntar imagen o referencia</Label>
          <input
            id="referencia"
            name="referencia"
            type="file"
            accept="image/*,.pdf"
            onChange={(e) => setArchivo(e.target.files?.[0]?.name ?? null)}
            className="mt-2 w-full cursor-pointer rounded-2xl border border-dashed border-input bg-secondary/30 px-4 py-3 text-sm text-muted-foreground file:mr-3 file:cursor-pointer file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-1.5 file:text-xs file:text-primary-foreground"
          />
          {archivo ? (
            <p className="mt-1.5 text-xs text-muted-foreground">Archivo: {archivo}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-7 flex items-start gap-3">
        <Checkbox
          id="privacidad"
          checked={privacidad}
          onCheckedChange={(v) => setPrivacidad(v === true)}
          className="mt-0.5"
        />
        <Label htmlFor="privacidad" className="text-sm font-normal leading-relaxed">
          He leído y acepto la política de privacidad. *
        </Label>
      </div>
      {err("privacidad")}

      <Button type="submit" size="xl" className="mt-7 w-full" disabled={enviando}>
        {enviando ? "Enviando…" : "Enviar solicitud"}
      </Button>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Cuéntanos tu idea sin compromiso. Te responderemos lo antes posible.
      </p>
    </form>
  );
}
