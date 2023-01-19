const GETBANKS = `
    select
        b.*
    from banks as b
    where (companyname ilike concat('%', $2::varchar, '%')) and case when $1 > 0 then b.bank_id = $1 else true end
    order by b.bank_id 
`;

const POSTBANKS =`
insert into banks (category_id,companyname,inn,ogrn,kpp,country,raiting,prognoz,update_date,images)
values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning *
`;


const PUTBANKS = `
    with old_banks as (
        select
            bank_id,
            category_id,
            companyname,
            inn,
            ogrn,
            kpp,
            country,
            raiting,
            prognoz,
            update_date,
            images
        from banks
        where bank_id = $1    
    ) update banks as b
        set
        category_id = 
                case 
                    when $2 > 0 then $2
                    else o.category_id
                end,
        companyname = 
                case 
                    when length($3) > 1 then $3
                    else o.companyname
                end,
                inn = 
                case 
                    when length($4) > 1 then $4
                    else o.inn
                end,
                ogrn = 
                case 
                    when length($5) > 1 then $5
                    else o.ogrn
                end,
                kpp = 
                case 
                    when length($6) > 1 then $6
                    else o.kpp
                end,
                country = 
                case 
                    when length($7) > 1 then $7
                    else o.country
                end,
                raiting = 
                case 
                    when length($8) > 1 then $8
                    else o.raiting
                end,
                prognoz = 
                case 
                    when length($9) > 1 then $9
                    else o.prognoz
                end,
                update_date = 
                case 
                    when length($10) > 1 then $10
                    else o.update_date
                end,
                images = 
                case 
                    when length($10) > 1 then $10
                    else o.images
                end
    from old_banks as o   
    where b.bank_id = $1
    returning b.*                 
`;

const DELETEBANKS =`
delete from banks 
where bank_id=$1 returning * 
`;

export {
    GETBANKS,
    POSTBANKS,
    PUTBANKS,
    DELETEBANKS
}