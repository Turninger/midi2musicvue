<template>
    <div>
        <table>
            <tr>
                <td>userId</td>
                <td>userName</td>
                <td>password</td>
            </tr>
            <tr>
                <td>{{users[0].userid}}</td>
                <td>{{users[0].username}}</td>
                <td>{{users[0].password}}</td>
            </tr>
        </table>
        {{msg}}
    </div>
</template>

<script>
    export default {
        name: "User",
        data(){
            return{msg:"Hello csy520",
            users:[
                {
                    userid:10001,
                    username:'csyyy',
                    password:'xwy521'
                },
                {
                    userid:10001,
                    username:'csyyy',
                    password:'xwy521'
                }
            ]
            }
        }
    }
</script>

<style scoped>

</style>