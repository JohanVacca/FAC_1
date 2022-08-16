import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { cronogramaService } from "src/app/shared/services/cronograma/cronograma.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SucessDialogComponent } from "../../../admin/Dialog/sucess-dialog/sucess-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { finalize } from "rxjs/operators";
import { ShowCalendarComponent } from "../show-calendar/show-calendar.component";
import { ProjectService } from "../../../../shared/services/Proyect/project.service";
import { Actividad } from "../../../../shared/services/saveStateService/StateInterface";
import { Form, FormControl, Validators } from "@angular/forms"; //Se importa Formbuilder y Validators para crear formularios y validar campos
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PropiedadintService } from "src/app/shared/services/propiedadint-service/propiedadint.service";
import { UpdateNececidadesTableServiceService } from "src/app/shared/services/general/update-nececidades-table-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cronograma-new",
  templateUrl: "./cronograma-new.component.html",
  styleUrls: ["./cronograma-new.component.scss"],
})
export class CronogramaNewComponent implements OnInit, AfterViewInit {
  public listaCronogramas : any = [];
  public cronogramaCompleto;
  public cronograma: Actividad[];
  public cronogramaId: string;
  public seguimiento: FormGroup;
  public ACTIVITY = "Actividad";
  public SUB_ACTIVITY = "Sub Actividad";
  public START_DATE = "Fecha de inicio";
  public PLANNING_DATE = "Fecha planeada cumplimiento";
  public REAL_DATE = "Fecha real cumplimiento";
  public GAP = "Desfase";
  public ADVANCE = "Avance estimado";
  public ACTIONS = "Acciones";
  public NO_REAL_DATE = "No se ha asignado fecha de cumplimiento";
  public TITLE_TABLE = "Proyecto: ";
  public ADD_CRON = "Agregar fecha de cumplimiento";
  public UPDATE_CRON = "Actualizar fecha de cumplimiento";
  public DELETE_CRON = "Eliminar fecha de cumplimiento";
  public PROJECT_NAME = ". . .";

  public semaforo_cronograma = 0;
  public LISTA_NOMBRESPR = [];
  public sesion_rol = localStorage.getItem("Role"); //Traemos el rol logeado
  public proyecto_propiedadint = [];
  public SubActmodal = "";
  public formPropiedad!: FormGroup;
  public idProyectoCronograma = "";
  public idCronograma = "";
  public subact = "";
  public cronogramaParaActualizar;
  public nombreActividad = "";

  constructor(
    private cronogramaService: cronogramaService,
    private propiedadintService: PropiedadintService,
    private rutaActiva: ActivatedRoute,
    private updateNececidadesTableServiceService: UpdateNececidadesTableServiceService,
    private projectService: ProjectService,
    private form: FormBuilder,
    private modal: NgbModal,
    private router: Router,
    public dialog: MatDialog
  ) {}

  //Construir formulario, se deben parecer los campos
  private builder(): void {
    this.formPropiedad = this.form.group({
      descrProteccion: new FormControl("", Validators.required),
    });
  }

  ngAfterViewInit() {}

  ngOnInit(): void {
    //this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.getAll();
    this.builder();
  }

  metodocrearPropiedad() {
    const descripcionProteccion = this.formPropiedad.value;
    //console.log("Descripcion", descripcionProteccion[0]);
    //console.log("Project Id", this.idProyectoCronograma);
    //console.log("Actividad: ", this.nombreActividad);
    //console.log("Cronograma Id", this.idCronograma);
    //console.log("Subactividad: ", this.subact)

    if (this.idCronograma !== null && descripcionProteccion[0] != "undefined") {
      this.cronogramaService
        .getById(this.idCronograma)
        .subscribe((response) => {
          this.cronogramaParaActualizar = response.cronograma;
          //console.log("Imprimiendo CRONOGRAMA Subscribe", this.cronogramaParaActualizar.cronograma) //Cronograma
          this.actualizarEstadoSubactividad();
        });

      this.propiedadintService
        .createPropiedad(
          this.idProyectoCronograma,
          this.idCronograma,
          this.subact,
          descripcionProteccion,
          this.nombreActividad
        )
        .pipe(
          finalize(() =>
            this.updateNececidadesTableServiceService.updateTable()
          )
        ) //refrescar tabla
        .subscribe(
          (data) => {},
          (error) => {
            throw error;
          }
        );
    }
  }

  actualizarEstadoSubactividad() {
    var i;
    var j;
    //console.log("Imprimiendo CRONOGRAMA", this.cronogramaParaActualizar) //Cronograma
    //console.log(typeof(this.cronogramaParaActualizar));
    for (i of this.cronogramaParaActualizar.actividades) {
      if (i.nombreAct == this.nombreActividad) {
        //console.log(i.nombreAct," = ",this.nombreActividad)
        for (j of i.subActividad) {
          if (j.nombreSub == this.SubActmodal) {
            //console.log(j.nombreSub," = ",this.SubActmodal)
            //console.log(j)
            j.protegido = true;
          }
        }
      }
    }
    this.cronogramaService
      .update(this.idCronograma, { cronogramas: this.cronogramaParaActualizar })
      .subscribe(() => {});
    //console.log("TYPEOF: ",typeof(this.cronogramaParaActualizar))
    //console.log("UPDATE: ",this.cronogramaParaActualizar)
  }

  openModalEdit(
    idProyectoCronograma,
    nombresubAct,
    idCronograma,
    subact,
    actividad
  ) {
    this.nombreActividad = actividad;
    this.subact = subact;
    this.SubActmodal = nombresubAct;
    this.idProyectoCronograma = idProyectoCronograma;
    this.idCronograma = idCronograma;
    this.projectService.getById(idProyectoCronograma).subscribe((proyecto) => {
      let prEsperados = proyecto.Proyecto.productosEsperados;
      //console.log(prEsperados);
      prEsperados.forEach((element) => {
        //console.log(element)
        if (element.subActividad === nombresubAct) {
          //console.log("cumple");
          this.proyecto_propiedadint = [];
          this.proyecto_propiedadint.push(element);
        }
      });
    });
    //console.log(idProyectoCronograma);
    //console.log("Subact tabla: ",nombresubAct);
    //console.log("DatoFinal",this.proyecto_propiedadint);
  }

  private getAll(): void {
    //Obtener los proyectos del proyecto actualmente cliqueado
    const projectId = this.rutaActiva.snapshot.params.id;
    if (projectId) {
      this.cronogramaService
        .getByProject(projectId)
        .pipe(finalize(() => this.getProject(projectId)))
        .subscribe((response) => {
          this.cronograma = response.cronogramas.actividades;
          this.cronogramaId = response.cronogramas._id;
          this.cronogramaCompleto = response;

          this.semaforo_cronograma = 1;
        });
    } else {
      this.cronogramaService
        .getAll() //Se obtienen todos los cronogramas existentes
        .subscribe((response) => {
          this.listaCronogramas = response.cronogramas;
          this.semaforo_cronograma = 2;
          this.PROJECT_NAME = "a";

          const filterObject = (obj, filter, filterValue) => Object.keys(obj).reduce((acc, val) => (obj[val][filter] === filterValue ? acc : {
            ...acc,
            [val]: obj[val]
          }), {});

          //console.log("Antes del For: ", this.listaCronogramas)

          for (let q of this.listaCronogramas) {
            for (let i of q.actividades) {

              //i = Object.fromEntries( Object.entries(i.subActividad.protegido).filter(([key, value]) => value === false) )

              const aux = filterObject(i.subActividad, "protegido", true);

              i.subActividad = Object.values(aux); //Esto debido a la forma en que termina el objeto en 'aux'

              //console.log("metodo metodo: ", Object.values(aux));
              //console.log("normal normal: ", i.subActividad);
              // for (let j of i.subActividad) {
              //   if (j.protegido == true) {
              //     console.log("j j j: ",j);
              //   }
              //   j = Object.filter(j, subact => subact.protegido == false);
              // }

            }
          }

          //console.log("Typeof: ", typeof(this.listaCronogramas))

          //console.log("Entra: ",(element.actividades[0].nombreAct));
          //this.getProject(element.proyectId);
          //console.log(this.LISTA_NOMBRESPR);//Imprime todo lleno ya

          // for (let i = 0; i < this.listaCronogramas.length; i++) {
          //     this.listaCronogramas[i].push(this.LISTA_NOMBRESPR[i]);
          // }

          //console.log("Cronogramas: ",this.listaCronogramas);
          //console.log(this.LISTA_NOMBRESPR);
          //console.log("semaforo: ",this.semaforo_cronograma)
          //Crear una variable [] que guarde los nombres de los proyectos y aca debemos llamar al metodo getProject y editarlo para que guarde
        }); //O crear un nuevo getproject que no reciba id sino que sea void y llame todos los nombres de proyectos
    } //Ver si puedo editar listacronogramas y añadir el nombre del proyecto con getproject
  }

  private getProject(projectId): void {
    //console.log("Project Name2: ",this.PROJECT_NAME); //arroja 'a'
    if (this.PROJECT_NAME != ". . .") {
      this.projectService.getById(projectId).subscribe((project) => {
        //console.log('Se añade: ',(project.Proyecto.iniciarProyecto[0].nombreProyecto))
        this.LISTA_NOMBRESPR.push(
          project.Proyecto.iniciarProyecto[0].nombreProyecto
        );
        //this.listaCronogramas.push(project.Proyecto.iniciarProyecto[0].nombreProyecto),projectId;
        //VER SI PUEDO AGREGAR TAMBIEN EL PROYECTID CON ESE NOMBRE DE PROYECTO
      });
    } else {
      this.projectService.getById(projectId).subscribe((project) => {
        this.PROJECT_NAME = project.Proyecto.iniciarProyecto[0].nombreProyecto;
      });
    }
  }

  public deleteRealFinalDate(activityId: string, subActivityId: string): void {
    const activity = this.cronograma.find((crono) => crono._id === activityId);
    const subActivity = activity.subActividad.find(
      (subActivityActual) => subActivityActual._id === subActivityId
    );
    subActivity.fechaReal = null;
    this.cronogramaService
      .update(this.cronogramaId, this.cronogramaCompleto)
      .pipe(finalize(this.getAll))
      .subscribe((response) => {
        this.dialog
          .open(SucessDialogComponent, {
            role: "alertdialog",
            autoFocus: false,
            data: {
              icono: "done",
              severidad: "dialog-warning",
              encabezado: `Seguimiento Actualizado`,
              descripcion: `Fecha real de cumplimiento eliminada`,
            },
          })
          .afterClosed()
          .subscribe(() => {
            this.getAll();
          });
      });
  }

  public setRealFinalDate(name: string, activityId: string, id: string): void {
    this.dialog
      .open(ShowCalendarComponent, { data: { name } })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.updateRealDate(id, activityId, result);
        }
      });
  }

  private updateRealDate(
    subActivityId: string,
    activityId: string,
    newDate: string
  ): void {
    const activity = this.cronograma.find((crono) => crono._id === activityId);
    const subActivity = activity.subActividad.find(
      (subActivityActual) => subActivityActual._id === subActivityId
    );
    subActivity.fechaReal = new Date(newDate);
    this.cronogramaService
      .update(this.cronogramaId, this.cronogramaCompleto)
      .subscribe((response) => {
        this.dialog
          .open(SucessDialogComponent, {
            role: "alertdialog",
            autoFocus: false,
            data: {
              icono: "done",
              severidad: "dialog-sucess",
              encabezado: `Seguimiento Actualizado`,
              descripcion: `Fecha real de cumplimiento actualizada`,
            },
          })
          .afterClosed()
          .subscribe(() => {
            this.getAll();
          });
      });
  }

  public calculateGap(endDate: string, realDate: string): number {
    const end = new Date(endDate);
    const real = new Date(realDate);
    const differenceInTime = end.getTime() - real.getTime();
    return Math.ceil(differenceInTime / (1000 * 3600 * 24));
  }

  public calculateAdvance(firstDate: string, secondDate: string): number {
    const startDate = new Date(firstDate);
    const endDate = new Date(secondDate);
    const today = new Date();

    if (startDate > today) {
      return 0;
    }

    if (endDate < today) {
      return 100;
    }

    if (startDate < today && today < endDate) {
      const totalDays = Math.ceil(
        (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
      );
      const actualDay = Math.ceil(
        (today.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
      );
      return Math.ceil((actualDay * 100) / totalDays);
    }
  }
}
