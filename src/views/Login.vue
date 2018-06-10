<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Please Login to Continue</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="person"
                    name="email"
                    label="Email"
                    type="email"
                    v-model="email"
                    required
                    :error-messages="emailErrors"
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="password"
                    required
                    :error-messages="passwordErrors"
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  :loading="isLoading"
                  :disabled="isLoading"
                  color="primary"
                  @click="login"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    validations: {
      email: { required, email },
      password: { required }
    },
    data: () => ({

    }),
    methods: {
      login() {
        this.$v.$touch();
        if (this.$v.$invalid) {
          console.log('validation error');
        } else {
          this.$store.commit('login/toggleLoading', !this.isLoading);
          this.$store.dispatch('login/loginAction', { email: this.email, password: this.password });
        }
      }
    },
    computed: {
      isLoading(){
        return this.$store.state.login.isLoading;
      },
      email: {
        get(){
          return this.$store.state.login.email;
        },
        set(value){
          this.$store.commit('login/emailVal', value);
        }
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      password: {
        get(){
          return this.$store.state.login.password;
        },
        set(value){
          this.$store.commit('login/passwordVal', value);
        }
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Password is required')
        return errors
      }
    }
  }
</script>
