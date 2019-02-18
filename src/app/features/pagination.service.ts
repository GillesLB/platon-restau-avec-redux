export class PaginationService {

getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    // calcule le nombre total de page
    const totalPages = Math.ceil(totalItems / pageSize);

    // s'assure que le rang de la page est possible
    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    let startPage: number, endPage: number;
    if (totalPages <= 10) {
        // si moins de 11 pages, on montre tout
        startPage = 1;
        endPage = totalPages;
    } else {
        // si 11 ou plus, on ajoute "début" et "fin"
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }

    // calcule le index de début et de fin
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // crée un tableau de pages to ng-repeat in the pager control
    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // retourne un objet contenant toutes les propriétés nécessaires à la vue
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
  }
}
