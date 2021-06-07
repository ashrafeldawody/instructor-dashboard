import Vue from "vue";
import Router from "vue-router";

function route(path, file, name, children) {
  return {
    exact: true,
    path,
    name,
    children,
    component: require(`../views/${file}.vue`).default
  };
}

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    route("/", "Home", "Home"),
    route("/login", "Login", "Login"),
    route("/error", "Error", "error"),
    route("/dashboard/", "Dashboard", "dashboard", [
      route("groups", "pages/groups", "groups"),
      route("group/:id", "pages/group", "group"),
      route("categories", "pages/categories", "categories"),
      route("tests", "pages/tests", "tests"),
      route("questions", "pages/questions", "questions"),
      route(
        "questions/new",
        "pages/components/questions/addQuestion",
        "addQuestions"
      ),
      route("results", "pages/results", "results"),
      route("settings", "pages/settings", "settings")
    ]),
    {
      path: "*",
      redirect: "/error",
      query: { code: 404, message: "Page Not Found." }
    }
  ]
});

export default router;
