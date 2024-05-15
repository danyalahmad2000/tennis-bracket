select * from tournaments;

select * from players;

select g.group_id,g.tournament_id,g.group_name from groups g 
join tournaments t on t.tournament_id=g.tournament_id 
where t.isactive=1;

select gp.group_player_id,gp.group_id,gp.player_id from group_players gp 
join groups g on g.group_id=gp.group_id
join tournaments t on t.tournament_id=g.tournament_id 
where t.isactive=1;

update group_players set group_stage=1 where player_id in (21)
update group_players set group_stage=0 where player_id in (19)


update group_players set final=1 where player_id in (30)
update group_players set semi_final=1 where player_id in (30,23)
update group_players set quarter_final=1 where player_id in (23,21)
update group_players set group_stage=0 where player_id in (19)



select gp.group_id, gp.player_id, p.name, gp.group_stage from group_players gp
join players p on p.player_id=gp.player_id
and gp.group_stage=1 order by gp.group_id

select gp.group_id, gp.player_id, p.name, gp.group_stage from group_players gp
join players p on p.player_id=gp.player_id
and gp.quarter_final=1 order by gp.group_id

select gp.group_id, gp.player_id, p.name, gp.group_stage from group_players gp
join players p on p.player_id=gp.player_id
and gp.semi_final=1 order by gp.group_id

select * from group_players

SELECT gp.*, p.name, p.photo
            FROM group_players gp 
            JOIN players p ON gp.player_id = p.player_id
            JOIN groups g ON gp.group_id = g.group_id
            JOIN tournaments t ON g.tournament_id = t.tournament_id 
            WHERE t.isactive = 1 and gp.group_stage=1;