
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import GithubApi from "./src/components/githubApi/GithubApi"


export default function page() {
  return (
    <div>
      <GithubApi/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"></script>
    </div>
  )
}
