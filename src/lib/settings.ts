
type RouteAccessMap = {
    [key: string]: string[];
  };


export const routeAccessMap: RouteAccessMap = {
    "/admin(.*)": ["admin"],
    "/staff(.*)": ["admin","staff"], 
    "/list/projects": [ "staff"],
    "/list/tasks": [ "staff"],
    "/list/staff": [ "staff"],
    "/list/all-staff": ["admin", ],
    "/list/all-task": ["admin", ],
    "/list/all-project": ["admin",],

    
  };