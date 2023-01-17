const GETCATEGORIES = `
select
c.*,
json_agg(b.*) as banks
from categories as c
left join banks as b on b.category_id = c.category_id
where case
                            when $1 > 0 then c.category_id = $1
                            else true
                            end 
group by c.category_id
order by c.category_id
`; 

const POSTCATEGORIES =`
insert into categories (title_uz,title_en,title_ru)
values ($1,$2,$3) returning *
`;

const PUTCATEGORIES = `
    with old_categories as (
        select
            category_id,
            title_uz,
            title_en,
            title_ru
        from categories
        where category_id = $1    
    ) update categories as c 
        set
        title_uz = 
                case 
                    when length($2) > 1 then $2
                    else o.title_uz
                end,
                title_en  = 
                case 
                    when length($3) > 1 then $3
                    else o.title_en
                end,
                title_ru = 
                case 
                    when length($4) > 1 then $4
                    else o.title_ru
                end
    from old_categories as o   
    where c.category_id = $1
    returning c.*                 
`;

const DELETECATEGORIES =`
delete from categories
where category_id=$1 returning *
`;

export {
    GETCATEGORIES,
    POSTCATEGORIES,
    PUTCATEGORIES,
    DELETECATEGORIES
}