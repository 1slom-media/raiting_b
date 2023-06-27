const GETRAITING = `
    select
        r.*
    from raiting as r
    where case when $1 > 0 then r.id = $1 else true end
    order by r.id
`;

const POSTRAITING = `
insert into
    raiting(
        bank_id,raiting,prognoz,update_date,sertifikat,type_reting,link,update_date_pdf
    )
values
    ($1,$2,$3,$4,$5,$6,$7,$8) returning *
`;

const PUTRAITING = `
    with old_raiting as (
        select
            id,
            bank_id,
            raiting,
            prognoz,
            update_date,
            sertifikat,
            type_reting,
            link,
            update_date_pdf
        from raiting
        where id = $1    
    ) update raiting as r
        set
        bank_id = 
                case 
                    when  $2 > 0 then $2
                    else o.bank_id
                end,
        raiting = 
                case 
                    when length($3) > 1 then $3
                    else o.raiting
                end,
        prognoz = 
                case 
                    when length($4) > 1 then $4
                    else o.prognoz
                end,
        update_date = 
                case 
                    when length($5) > 1 then $5
                    else o.update_date
                end,
        sertifikat = 
                case 
                    when length($6) > 1 then $6
                    else o.sertifikat
                end,
        type_reting = 
                case 
                    when length($7) > 1 then $7
                    else o.type_reting
                end,
                link = 
                case 
                    when length($8) > 1 then $8
                    else o.link
                end,
                update_date_pdf = 
                case 
                    when length($9) > 1 then $9
                    else o.update_date_pdf
                end
    from old_raiting as o   
    where r.id = $1
    returning r.*                 
`;

const DELETERAITING = `
delete from raiting
where id=$1 returning *
`;

export { GETRAITING, POSTRAITING, PUTRAITING, DELETERAITING };
