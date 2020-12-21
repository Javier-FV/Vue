<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            <div v-if="editMode">
              Editar
            </div>
            <div v-else>
              crear
            </div>

            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <form 
              @submit="checkForm"
              :method="metodo"
            >
              <label for="descripcion" >Descripción</label>
                <input
                  id="descripcion"
                  v-model="egreso.descripcion"
                  type="input"
                  name="descripcion"
                  class="input-control"
                >
              <label for="frecuencia">Frecuencia</label>
                <input
                  id="frecuencia"
                  v-model="egreso.frecuencia"
                  type="input"
                  name="frecuencia"
                  class="input-control"
                >
              <label for="importe">Importe</label>
                <input
                  id="importe"
                  v-model="egreso.importe"
                  type="number"
                  name="importe"
                  min="0"
                  class="input-control"
                >
              <label for="fecha_de_vencimiento">Fecha de vencimiento</label>
                <input
                  id="fecha_de_vencimiento"
                  v-model="egreso.fecha_de_vencimiento"
                  type="input"
                  name="fecha_de_vencimiento"
                  class="input-control"
                >
              <label for="estado">Estado</label>
                <input
                  id="estado"
                  v-model="egreso.estado"
                  type="input"
                  name="estado"
                  class="input-control"
                >
              <label for="categoria">Categoria</label>
                <input
                  id="categoria"
                  v-model="egreso.categoria"
                  type="input"
                  name="categoria"
                  class="input-control"
                >
              <label for="fecha_lanzamiento">Fecha Lanzamiento</label>
                <input
                  id="fecha_lanzamiento"
                  v-model="egreso.fecha_lanzamiento"
                  type="input"
                  name="fecha_lanzamiento"
                  class="input-control"
                >
              <label for="fecha_pago">Fecha de pago</label>
                <input
                  id="fecha_pago"
                  v-model="egreso.fecha_pago"
                  type="input"
                  name="fecha_pago"
                  class="input-control"
                >
              <label for="observaciones">Observaciones</label>
                <textarea
                  id="observaciones"
                  v-model="egreso.observaciones"
                  type="textarea"
                  name="observaciones"
                  class="textarea"
                />
            </form>
          </slot>

        </section>
        <div class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn primary"
              @click="close"
              aria-label="Close modal"
            >
              Cancelar
            </button>
            <button
              v-if="!editMode"
              type="button"
              class="btn success"
              @click="save"
              aria-label="Close modal"
            >
              Guardar
            </button>
            <button
              v-else
              type="button"
              class="btn success"
              @click="update"
              aria-label="Close modal"
            >
              Actualizar
            </button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    props: {
      editMode: Boolean, 
      egreso: Object,
    },
    data:function(){
      return {
        metodo: "post",
      }
    },
    methods: {
      close: function() {
        this.$emit('close');
      },
      save: function() {
        this.$emit('save', this.egreso);
      },
      update: function() {
        this.$emit('update', this.egreso);
      },
      checkForm: function(){

      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.3);
    display: flow-root;
    max-height: 80%;
    max-width: 80%;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding-left: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #8a9795;
    background: transparent;
  }
  
  .danger {
    color: #E5E7E9;
    background: #dc3545;
  }
  .primary {
    color: #E5E7E9;
    background: #007bff;
  }
  .success {
    color: #e5e7e9;
    background: #28a745;
  }
  .btn {
    border: 1px solid #df4759;
    border-radius: 5px;
    padding: 10px 10px;
  }
  .input-control {
    width: 100%;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
  }

  .textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    resize: none;
  }
</style>