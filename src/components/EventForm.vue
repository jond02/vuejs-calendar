<template>
    <div id="event-form" :class="{ active: active }" :style="{ top: top, left: left }">
        <h4>Add an event</h4>
        <p>{{ date }}</p>
        <div class="text">
            <input v-focus type="text" v-model="description" @keyup.enter="create" placeholder="Dinner at Pancho's"/>
        </div>
        <div class="buttons">
            <button @click="create">Create</button>
        </div>
        <button id="close-button" @click="close">&#10005</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                description: ""
            }
        },
        computed: {
            top() {
                return `${this.$store.state.eventFormPosY}px`;
            },
            left() {
                return `${this.$store.state.eventFormPosX}px`;
            },
            active() {
                return this.$store.state.eventFormActive;
            },
            date() {
                return this.$store.state.eventFormDate.format("dddd, MMM Do");
            }
        },
        methods: {
            close() {
                this.$store.commit("eventFormActive", false);
            },
            create() {
                if (this.description.trim().length > 0) {
                    this.$store.commit("addEvent", this.description);
                }
                this.description = "";
                this.close();
            }
        },
        directives: {
            focus: {
                //update hook is fired every time the element is rendered
                update(el) {
                    el.focus();
                }
            }
        }
    }
</script>