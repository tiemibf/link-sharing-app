import api from "../../config/api";
import { LINK_SHARING_SERVICE_URL } from "../../constants";
import { Link } from "../../models/Links";

class LinksService {
  getLinks() {
    return api.get<Link[]>(`${LINK_SHARING_SERVICE_URL}/links`);
  }
}

export const linksService = new LinksService();
