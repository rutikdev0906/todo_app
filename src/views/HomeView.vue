<!-- <template>
  <div class="home">
    <div class="col-md-6-mx-auto">
      <div class="form-group d-flex">
        <input class="form-control" v-model="todo" placeholder="Enter todo" type="text">
        <button class="btn btn-success" @click="createTodo()">Create</button>
      </div>
        <ul class="list-group mt-4">
          <li @click="updateTodo(todo.uid, todo.is_completed)" class="list-group-item" v-for="todo in todos" :key="todo.uid">
          <span v-if="todo.is_completed">
            {{ todo.todo_name }}
          </span>
          <p v-else>{{ todo.todo_name }}</p>
          </li>
        </ul>
    </div>      
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      todo : '',
      todos : []
    }
  },
  created(){
    this.getTodos()
  },
  methods : {
    updateTodo(uid, is_completed) {
      const token = localStorage.getItem('token')
      const requestOptions = {
        method : 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${token}`
          
        },
        body: JSON.stringify({ uid : uid , is_completed : !is_completed}),
      };

      fetch('http://localhost:8000/api/todo/', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    },
    getTodos() {
      const token = localStorage.getItem('token')
      const requestOptions = {
        method : 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${token}`
          
        }
      };

      fetch('http://localhost:8000/api/todo/', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.todos = data.data
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    },
    createTodo() {
      const token = localStorage.getItem('token')
      console.log(token)
      const requestOptions = {
        method : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${token}`
          
        },
        body: JSON.stringify({ todo_name : this.todo }),
      };

      fetch('http://localhost:8000/api/todo/', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.todo = ''
        this.getTodos()
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }
}
</script> -->

<template>
  <div class="home">
    <div class="col-md-6 mx-auto">
      <div class="form-group d-flex">
        <input class="form-control" v-model="todo" placeholder="Enter todo" type="text">
        <button class="btn btn-success" @click="createTodo">Create</button>
      </div>
      <ul class="list-group mt-4">
        <li
          @click="updateTodo(todo.uid, todo.is_completed)"
          class="list-group-item"
          v-for="todo in todos"
          :key="todo.uid"
        >
          <!-- Display different styles based on is_completed -->
          <span v-if="todo.is_completed" class="completed">{{ todo.todo_name }}</span>
          <span v-else>{{ todo.todo_name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      todo: '',
      todos: []
    };
  },
  created() {
    // Fetch todos when the component is created
    this.getTodos();
  },
  methods: {
    updateTodo(uid, is_completed) {
      const token = localStorage.getItem('token');
      const requestOptions = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ uid: uid, is_completed: !is_completed })
      };

      fetch('http://localhost:8000/api/todo/', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Update todos after successful update
          this.getTodos();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
  //   getTodos() {
  //   try {
  //     const token = localStorage.getItem('token');
      
  //     if (!token) {
  //       console.error('Token not found in localStorage');
  //       return;
  //     }
      
  //     const requestOptions = {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`
  //       }
  //     };
      
  //     const response = fetch('http://localhost:8000/api/todo/', requestOptions);

      
  //     if (! response.ok) {
  //       console.log("this is error response.......................\n",response.status , "......\n", response)
  //       throw new Error('Failed to fetch todos');
  //     }
      
  //     const data = response.json();
  //     return data; // Return the retrieved todos
      
  //   } catch (error) {
  //     console.error('Error:', error);
  //     return []; // Return an empty array in case of error
  //   }
  // },


    getTodos() {
      const token = localStorage.getItem('token');
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      fetch('http://localhost:8000/api/todo/', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          this.todos = data.Todos // Update todos array
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
    createTodo() {
      const token = localStorage.getItem('token');
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ todo_name: this.todo })
      };

      fetch('http://localhost:8000/api/todo/', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.todo = '';
          // Update todos after successful creation
          this.getTodos();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>

